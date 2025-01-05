"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import Link from "next/link"
import AlertComponent from "@/components/alertComponent"
import { login, setAuthToken } from '@/lib/auth'

export default function LoginPage() {

  const [isLoading, setIsLoading] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password_hash: "",
  })
  const [isError, setIsError] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    if(!isLoading) {
      e.preventDefault()
      setIsError(false)
      setIsLoading(true)
      try {
        const success = await login(loginInfo.username, loginInfo.password_hash);
        if (success) {
          router.push("/demo");
        } else {
          setIsError(true);
          setAlertMessage("Invalid credentials");
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Login failed:', error);
        setIsError(true);
        setAlertMessage("Login failed. Please try again.");
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Card className="w-[400px] shadow-xl bg-card/50 backdrop-blur-sm">
        {isError && <AlertComponent message={alertMessage} setIsError={setIsError}/>}
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to NexusIAM</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={loginInfo.username}
                onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={loginInfo.password_hash}
                onChange={(e) => setLoginInfo({ ...loginInfo, password_hash: e.target.value })}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {isLoading ?
              <div className="mx-auto">
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
              </div> : 
              <Button type='submit' className="w-full">Sign In</Button>
            }
            <div className="text-sm text-muted-foreground text-center">
              Don't have an account?&nbsp;
              <Link href="/register" className="text-primary hover:underline">
                Register
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}