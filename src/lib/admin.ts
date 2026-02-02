import { supabase, isSupabaseConfigured } from "./supabase";

const TABLE_NAME = "admin_users";

export async function isUserAdmin(email: string): Promise<boolean> {
  if (!isSupabaseConfigured || !supabase || !email) {
    return false;
  }

  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("email")
      .eq("email", email.toLowerCase())
      .single();

    if (error) {
      // PGRST116 means no rows found - not an admin
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
      .from(TABLE_NAME)
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
      .from(TABLE_NAME)
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
      .from(TABLE_NAME)
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
