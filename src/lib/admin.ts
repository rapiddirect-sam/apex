import { supabase, isSupabaseConfigured } from "./supabase";

const LEGACY_TABLE = "admin_users";
const USERS_TABLE = "users";

export async function isUserAdmin(email: string): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase || !email) {
    return false;
  }

  try {
    // First check the new users table for admin/super_admin role
    const { data: userData, error: userError } = await supabase
      .from(USERS_TABLE)
      .select("role, status")
      .eq("email", email.toLowerCase())
      .single();

    if (!userError && userData) {
      // User found in users table - check role and status
      const isAdminRole = userData.role === "admin" || userData.role === "super_admin";
      const isActive = userData.status === "active";
      return isAdminRole && isActive;
    }

    // Fallback to legacy admin_users table for backwards compatibility
    const { data, error } = await supabase
      .from(LEGACY_TABLE)
      .select("email")
      .eq("email", email.toLowerCase())
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return false;
      }
      console.error("Error checking admin status:", error);
      return false;
    }

    return !!data;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}

export async function getAllAdmins(): Promise<string[]> {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from(LEGACY_TABLE)
      .select("email")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching admins:", error);
      return [];
    }

    return (data || []).map((row) => row.email);
  } catch (error) {
    console.error("Error fetching admins:", error);
    return [];
  }
}

export async function addAdmin(email: string): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase || !email) {
    return false;
  }

  try {
    const { error } = await supabase
      .from(LEGACY_TABLE)
      .insert({ email: email.toLowerCase() });

    if (error) {
      console.error("Error adding admin:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error adding admin:", error);
    return false;
  }
}

export async function removeAdmin(email: string): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase || !email) {
    return false;
  }

  try {
    const { error } = await supabase
      .from(LEGACY_TABLE)
      .delete()
      .eq("email", email.toLowerCase());

    if (error) {
      console.error("Error removing admin:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error removing admin:", error);
    return false;
  }
}
