import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-default-50">
      {/* Use the unified Navbar component */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8items-center">
              <div className="space-y-3 text-center lg:text-left">
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-default-900 leading-tight">
                    Effortlessly upload, manage, and access your <span className="text-primary">images</span>—securely and in one place
                  </h1>
                  <p className="text-basese md:tex-glg text-default-600">
                    Simple. Secure. Fast.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button 
                        size="lg" 
                        variant="solid" 
                        color="primary"
                        className="bg-blue-800 hover:bg-blue-700 text-white border-none rounded-none"
                      >
                        <span className="font-bold">Get Started</span>
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button 
                        size="lg" 
                        variant="flat" 
                        color="primary"
                        className="bg-blue-800 hover:bg-blue-700 text-white border-none rounded-none"
                      >
                        <span className="font-bold">Sign In</span>
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        variant="solid"
                        color="primary"
                        endContent={<ArrowRight className="h-4 w-4" />}
                        className="bg-blue-800 hover:bg-blue-700 text-white border-none rounded-none"

                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
              </div>

              <div className="flex justify-center order-first lg:order-last">
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CloudUpload className="h-16 md:h-20 w-16 md:w-20 text-primary/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-default-50">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-default-900">
              Your Advantages
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow">
                <CardBody className="p-6 text-center">
                  <CloudUpload className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
                    Quick Uploads
                  </h3>
                  <p className="text-default-600">Drag, drop, done.</p>
                </CardBody>
              </Card>

              <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow">
                <CardBody className="p-6 text-center">
                  <Folder className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
                    Smart Organization
                  </h3>
                  <p className="text-default-600">
                    Keep it tidy, find it fast.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 max-w-md sm:max-w-full">
                <CardBody className="p-6 text-center">
                  <Shield className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
                    Locked Down
                  </h3>
                  <p className="text-default-600">
                    Your images, your eyes only.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-12 md:py-20 px-4 md:px-6 bg-default-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-default-900">
              Ready?
            </h2>
            <SignedOut>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    variant="solid"
                    color="primary"
                    endContent={<ArrowRight className="h-4 w-4" />}
                  >
                    Let&apos;s Go

                  </Button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="solid"
                  color="primary"
                  endContent={<ArrowRight className="h-4 w-4" />}
                  className="bg-blue-800 hover:bg-blue-700 text-white border-none rounded-none"

                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </section>
      </main>

      {/* Simple footer */}
      <footer className="bg-blue-900 py-4 md:py-6 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <CloudUpload className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold">Dropbox</h2>
            </div>
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Dropbox
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}