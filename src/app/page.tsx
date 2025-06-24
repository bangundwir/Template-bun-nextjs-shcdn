import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Bun + Next.js + shadcn/ui Template
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A modern template with Bun runtime, Next.js framework, and beautiful shadcn/ui components
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Fast Runtime
              </CardTitle>
              <CardDescription>
                Powered by Bun for lightning-fast development and build times
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Beautiful UI
              </CardTitle>
              <CardDescription>
                Pre-configured with shadcn/ui components and Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Components
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Modern Stack
              </CardTitle>
              <CardDescription>
                TypeScript, ESLint, and modern development tools included
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Demo Form */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Try the Components</CardTitle>
            <CardDescription>
              Test the shadcn/ui components in action
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">
                Submit
              </Button>
              <Button variant="outline" className="flex-1">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16 text-slate-600 dark:text-slate-400">
          <p>Built with ❤️ using Bun, Next.js, and shadcn/ui</p>
        </div>
      </div>
    </div>
  );
}
