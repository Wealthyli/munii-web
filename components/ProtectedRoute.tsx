// components/ProtectedRoute.tsx
"use client";

import { useAuth } from "@/contexts";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

// Protected Route Types
interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
