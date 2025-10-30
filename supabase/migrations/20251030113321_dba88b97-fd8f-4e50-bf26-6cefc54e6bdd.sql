-- Create careers applications table
CREATE TABLE public.careers_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  linkedin_url TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.careers_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit applications (public INSERT)
CREATE POLICY "Anyone can submit career applications" 
ON public.careers_applications 
FOR INSERT 
TO public
WITH CHECK (true);

-- Only authenticated users can view applications (for admin access later)
CREATE POLICY "Only authenticated users can view applications" 
ON public.careers_applications 
FOR SELECT 
TO authenticated
USING (true);