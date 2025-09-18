// app/login/page.tsx
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    // Check if user is already logged in
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/auth/me", {
                    credentials: "include"
                });
                if (res.ok) {
                    router.replace("/");
                }
            } catch (err) {
                // Not authenticated, stay on login page
                console.error("Auth check failed:", err);
            }
        };
        
        checkAuth();
    }, [router]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include", // send cookies
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || "Login failed")
            }

            // Login success - use replace to prevent back navigation
            router.replace("/")
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-[400px] shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>

                        <p className="mt-4 text-center text-sm">
                            Don't have an account?{" "}
                            <a href="/register" className="text-blue-600 hover:underline">
                                Sign up
                            </a>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
