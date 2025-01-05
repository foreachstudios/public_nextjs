import { Button } from "@/components/ui/button"
import { Shield, Bell, BarChart } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">NexusIAM</span>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-white text-gray-900 hover:bg-white/90">
                Get Started
              </Button>
            </Link>
          </div>
        </header>

        <main className="py-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Secure Cloud Management Made Simple
            </h1>
            <p className="text-xl text-gray-300">
              NexusIAM provides enterprise-grade AWS cloud monitoring and management.
              Get comprehensive reporting, real-time alerts, and advanced IAM controls
              to secure and monitor your infrastructure.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/register">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <BarChart className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">Advanced Monitoring</h3>
                <p className="text-sm text-gray-300">Real-time insights into your AWS infrastructure</p>
              </div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <Shield className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">IAM Management</h3>
                <p className="text-sm text-gray-300">Comprehensive access control and policy management</p>
              </div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <Bell className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">Intelligent Alerts</h3>
                <p className="text-sm text-gray-300">Proactive security and compliance notifications</p>
              </div>
            </div>
          </div>
        </main>
        <div className="fixed bottom-4 left-4">
          <Link href="/demo">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/10">
              Start Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}