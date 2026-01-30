"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { FileText, LogOut, Home } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
        }}
      >
        <div style={{ color: "#D09947", fontSize: "18px" }}>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/admin/login");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "#121212" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          background: "#1a1a1a",
          borderRight: "1px solid #333",
          padding: "24px 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "0 24px 24px",
            borderBottom: "1px solid #333",
            marginBottom: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#D09947",
            }}
          >
            ApexBatch Admin
          </h1>
          <p
            style={{
              fontSize: "12px",
              color: "#666",
              marginTop: "4px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {user.email}
          </p>
        </div>

        <nav style={{ flex: 1, padding: "0 12px" }}>
          <Link
            href="/admin/blog"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              color: "#C5C6C9",
              textDecoration: "none",
              borderRadius: "8px",
              marginBottom: "4px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2a2a2a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <FileText size={18} />
            <span>Blog Posts</span>
          </Link>

          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              color: "#C5C6C9",
              textDecoration: "none",
              borderRadius: "8px",
              marginBottom: "4px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2a2a2a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <Home size={18} />
            <span>View Site</span>
          </Link>
        </nav>

        <div style={{ padding: "0 12px" }}>
          <button
            onClick={handleSignOut}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              color: "#C5C6C9",
              background: "transparent",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2a2a2a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
