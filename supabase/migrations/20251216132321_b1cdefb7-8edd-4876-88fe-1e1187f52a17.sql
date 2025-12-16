-- Remove redundant policy - "Users can view their own roles" already requires auth
DROP POLICY IF EXISTS "Authenticated users only" ON public.user_roles;