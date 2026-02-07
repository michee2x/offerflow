import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-black selection:bg-[#00ffb2] selection:text-black">
      
      {/* Visual Side (Left) */}
      <div className="relative flex w-full flex-col justify-between bg-black p-10 text-white lg:w-1/2">
        <div className="absolute top-10 right-10 z-20">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="h-6 w-6 rounded-full bg-[#00ffb2]" />
            <span className="text-lg font-bold tracking-tight">OfferFlow</span>
          </Link>
        </div>

        {/* 3D Glowing Ring Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] opacity-90 mix-blend-screen pointer-events-none">
                <Image
                  src="/images/ring.png"
                  alt="Glowing Ring"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
             </div>
        </div>

        <div className="z-20 mt-auto max-w-md">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for creators, <br />
            powered by AI.
          </h2>
          <p className="mt-4 text-zinc-400">
            Sign in to create content that moves your audience.
          </p>
        </div>
      </div>

      {/* Form Side (Right) */}
      <div className="flex w-full items-center justify-center bg-[#0a0a0a] p-8 lg:w-1/2">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to continue to your workspace.
            </p>
          </div>

          <div className="grid gap-6">
            <Button variant="outline" className="w-full bg-white text-black hover:bg-zinc-200 border-0 h-11 font-medium">
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Sign in with Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0a0a0a] px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <form className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="flex h-11 w-full rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffb2] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white" htmlFor="password">
                    Password
                    </label>
                    <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-[#00ffb2] hover:underline"
                    >
                    Forgot password?
                    </Link>
                </div>
                <div className="relative">
                    <input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    className="flex h-11 w-full rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffb2] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    />
                    <button type="button" className="absolute right-3 top-3 text-zinc-500 hover:text-white">
                        <Eye className="h-5 w-5" />
                    </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="h-4 w-4 rounded border-white/10 bg-black text-[#00ffb2] focus:ring-[#00ffb2]" />
                    <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-400"
                    >
                        Remember me
                    </label>
                  </div>
              </div>

              <Button className="w-full bg-[#00ffb2] text-black hover:bg-[#00ffb2]/90 h-11 font-semibold text-base mt-2 shadow-[0_0_20px_-5px_#00ffb2]">
                Sign in
              </Button>
            </form>

            <p className="px-8 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="hover:text-brand underline underline-offset-4 text-white hover:text-[#00ffb2]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
