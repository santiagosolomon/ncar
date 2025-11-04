//app/register/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    organization: "PTC", // Set default value
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrganizationChange = (value: string) => {
    setFormData({ ...formData, organization: value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const data = await res.json();

      if (res.ok) {
        router.push("/login");
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-sky-950">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow dark:border-2 dark:bg-sky-900">
        <h1 className="mb-6 text-2xl font-bold text-center">
          Create an Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="organization">Organization</Label>
            <Select
              value={formData.organization}
              onValueChange={handleOrganizationChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select organization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PTC">PTC</SelectItem>
                <SelectItem value="GICC">GICC</SelectItem>
                <SelectItem value="ALL">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <div>
            <Label>Organization</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, organization: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select organization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ptc">PTC</SelectItem>
                <SelectItem value="gicc">GICC</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 cursor-pointer"
          >
            Sign up
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
