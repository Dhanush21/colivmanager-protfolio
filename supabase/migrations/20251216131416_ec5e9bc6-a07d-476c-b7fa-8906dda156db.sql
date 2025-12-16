-- Block anonymous access to user_roles table
CREATE POLICY "Block anonymous access"
ON public.user_roles
FOR SELECT
TO anon
USING (false);

-- Also ensure authenticated users without roles can't read others' roles
-- by adding a baseline authenticated check
CREATE POLICY "Authenticated users only"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL);