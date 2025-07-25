import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Users, Award, TrendingUp, Instagram, Youtube, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center">
              <Image
                src="/11.jpg"
                alt="Profile"
                width={0}
                height={0}
                sizes="80vw"
                className="w-4/5 max-w-[400px] aspect-square object-cover rounded-full shadow-lg"
              />
            </div>
            {/* <Image
             src="/11.jpg"   // clean path with no space
             alt="Content Creation Setup"
             className="rounded-lg shadow-2xl w-full border "
             width={400}
             height={500}/> */}

          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Lakshay Chaudhary</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Digital Creator • Content Strategist • Brand Collaborator
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Helping brands tell their stories through authentic content and meaningful connections with over 100K+
            followers across platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Explore My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="btn-secondary bg-transparent">
              <Play className="mr-2 w-4 h-4" />
              Watch Reel
            </Button>
            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold gradient-text mb-2">500K+</h3>
              <p className="text-gray-400">Total Followers</p>
            </div>
            <div className="p-6">
              <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold gradient-text mb-2">50+</h3>
              <p className="text-gray-400">Brand Collaborations</p>
            </div>
            <div className="p-6">
              <TrendingUp className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold gradient-text mb-2">10M+</h3>
              <p className="text-gray-400">Content Views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Creating <span className="gradient-text">Authentic</span> Content That Resonates
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                From Mumbai to the world, I've been crafting digital experiences that connect brands with their
                audiences. My journey started with a passion for storytelling and has evolved into helping businesses
                grow through strategic content creation.
              </p>
              <p className="text-gray-400 mb-8">
                Specializing in lifestyle, technology, and business content, I bring a unique perspective that combines
                creativity with data-driven insights to deliver results that matter.
              </p>
              <Link href="/about">
                <Button className="btn-primary">
                  Learn More About Me <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            {
              <div className="flex justify-center items-center">
                <Image
                  src="/About-page.jpg"
                  alt="About section image"
                  width={400}
                  height={400}
                  className="rounded-full object-cover shadow-2xl"
                />
                {/* <Image
                  src="About-page.jpg"
                  alt="Content Creation Setup"
                  width={400}
                  height={400}
                  className="rounded-full object-cover shadow-2xl"
                /> */}
              </div>
            }
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Connect With Me <span className="gradient-text">Everywhere</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Follow my journey across different platforms and stay updated with the latest content, collaborations, and
            behind-the-scenes moments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="https://www.instagram.com/lakshayonly?igsh=MXF0Mm53NDc5amI4NA==" className="group">
              <div className="bg-gray-800 p-8 rounded-xl card-hover border border-gray-700 group-hover:border-pink-500">
                <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-gray-400 mb-4">1.2m Followers</p>
                <p className="text-sm text-gray-500">Lakshay Chaudhary Reel creator</p>
              </div>
            </Link>
            <Link href="https://youtube.com/@lakshaychaudhary?si=0kbHRxBLAzkeLKOJ" className="group">
              <div className="bg-gray-800 p-8 rounded-xl card-hover border border-gray-700 group-hover:border-red-500">
                <Youtube className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">YouTube</h3>
                <p className="text-gray-400 mb-4">3.28m Subscribers</p>
                <p className="text-sm text-gray-500">Video Creater. for Busness - sendthosebucks@gmail.com</p>
              </div>
            </Link>
            <Link href="https://x.com/lakshayonly?t=-S7I6h1TVQuMheNz5OQWMQ&s=08" className="group">
              <div className="bg-gray-800 p-8 rounded-xl card-hover border border-gray-700 group-hover:border-blue-400">
                <Twitter className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Twitter</h3>
                <p className="text-gray-400 mb-4">239K Followers</p>
                <p className="text-sm text-gray-500">Thoughts & Industry Insights</p>
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="bg-gray-800 p-8 rounded-xl card-hover border border-gray-700 group-hover:border-blue-600">
                <Linkedin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 mb-4">25K Connections</p>
                <p className="text-sm text-gray-500">Professional Network</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay <span className="gradient-text">Updated</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get exclusive content, collaboration opportunities, and industry insights delivered straight to your inbox.
          </p>
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. Your privacy is important to us.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
