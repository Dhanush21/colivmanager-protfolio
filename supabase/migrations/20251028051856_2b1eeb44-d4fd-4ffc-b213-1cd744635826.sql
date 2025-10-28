-- Create applications table to store job applications
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  linkedin_url TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public form)
CREATE POLICY "Anyone can submit applications"
  ON public.applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view applications (you as admin)
CREATE POLICY "Authenticated users can view applications"
  ON public.applications
  FOR SELECT
  TO authenticated
  USING (true);