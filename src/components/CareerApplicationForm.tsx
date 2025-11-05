import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const applicationSchema = z.object({
  full_name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  country_code: z.string()
    .min(1, { message: "Country code is required" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  position: z.string()
    .min(1, { message: "Position is required" }),
  linkedin_url: z.string()
    .trim()
    .url({ message: "Invalid LinkedIn URL" })
    .max(255, { message: "URL must be less than 255 characters" })
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" })
});

const countryCodes = [
  { code: "+1", country: "US/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+61", country: "Australia" },
];

const positions = [
  "Senior Property Manager",
  "Customer Success Specialist",
  "Full Stack Developer",
  "Product Designer",
  "Marketing Manager"
];

type ApplicationFormData = z.infer<typeof applicationSchema>;

const CareerApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [position, setPosition] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      country_code: "+1"
    }
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      const fullPhone = `${data.country_code}${data.phone}`;
      
      // Insert into Supabase
      const { error } = await supabase
        .from("careers_applications")
        .insert({
          full_name: data.full_name,
          email: data.email,
          phone: fullPhone,
          position: data.position,
          linkedin_url: data.linkedin_url || null,
          message: data.message
        });

      if (error) throw error;

      // Send to Google Sheets via Google Script
      try {
        await fetch("https://script.google.com/macros/s/AKfycbyouICbujB3qE7hgiPgkO4AuJ-Ev2XU_dy3MxkOG6ijcMHVpDJxFsXX-s_CCugifKf5/exec", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: data.full_name,
            email: data.email,
            phone: fullPhone,
            position: data.position,
            linkedInUrl: data.linkedin_url || "",
            reason: data.message
          })
        });
      } catch (scriptError) {
        console.error("Google Script error:", scriptError);
      }

      toast({
        title: "Application submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      
      reset();
      setCountryCode("+1");
      setPosition("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply for a Position</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name *</Label>
            <Input
              id="full_name"
              {...register("full_name")}
              placeholder="John Doe"
            />
            {errors.full_name && (
              <p className="text-sm text-destructive">{errors.full_name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <div className="flex gap-2">
              <Select
                value={countryCode}
                onValueChange={(value) => {
                  setCountryCode(value);
                  setValue("country_code", value);
                }}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      {item.code} {item.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="1234567890"
                className="flex-1"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position *</Label>
            <Select
              value={position}
              onValueChange={(value) => {
                setPosition(value);
                setValue("position", value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.position && (
              <p className="text-sm text-destructive">{errors.position.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin_url">LinkedIn URL (Optional)</Label>
            <Input
              id="linkedin_url"
              {...register("linkedin_url")}
              placeholder="https://linkedin.com/in/johndoe"
            />
            {errors.linkedin_url && (
              <p className="text-sm text-destructive">{errors.linkedin_url.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Why do you want to join us? *</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about yourself and why you'd be a great fit..."
              className="min-h-[120px]"
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CareerApplicationForm;
