-- Remove the overly permissive SELECT policy
-- Since applications data goes to Google Sheets and there's no need to read from the database,
-- we remove the SELECT policy to prevent any data exposure

DROP POLICY IF EXISTS "Only authenticated users can view applications" ON public.careers_applications;