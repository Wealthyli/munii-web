// contexts/auth-context.tsx
"use client";

// import axios from "axios";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { AuthContextProps, User } from "@/types";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromLocalStorage = async () => {
      const token = localStorage.getItem("token");
      const dummyUser = { name: "John Doe", email: "dummyemail@gmail.com" };
      if (token) {
        setUser(dummyUser);
      }

      // To use when connected to a server to verify token
      // if (token) {
      //   try {
      //     const { data } = await axios.get("/api/auth/me", {
      //       headers: { Authorization: `Bearer ${token}` },
      //     });
      //     setUser(data);
      //   } catch (error) {
      //     console.error("Error loading user:", error);
      //   }
      // }
      setLoading(false);
    };

    loadUserFromLocalStorage();
  }, []);

  const login = async (email: string, password: string) => {
    // const { data } = await axios.post("/api/auth/login", { email, password });
    // localStorage.setItem("token", data.token);
    // setUser(data.user);

    // Here we're using a dummy token and user for demonstration
    const dummyToken = "dummy-token";
    const dummyUser = { name: "John Doe", email };
    localStorage.setItem("token", dummyToken);
    setUser(dummyUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// You can use the useAuth hook to access the authentication state and functions.

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
