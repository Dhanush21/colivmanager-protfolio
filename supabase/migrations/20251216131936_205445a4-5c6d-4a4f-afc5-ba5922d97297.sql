-- Remove the overly restrictive policy that blocks all access
DROP POLICY IF EXISTS "Block anonymous access" ON public.user_roles;