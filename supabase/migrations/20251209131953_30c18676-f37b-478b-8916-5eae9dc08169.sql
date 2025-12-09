-- Add SELECT policy for admin users only
CREATE POLICY "Only admins can view career applications"
ON public.careers_applications
FOR SELECT
TO authenticated
USING ((auth.jwt() ->> 'role') = 'admin');