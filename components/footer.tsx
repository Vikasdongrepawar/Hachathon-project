import Link from "next/link"
import { Instagram, Youtube, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Lakshay Chaudhary</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Digital creator, content strategist, and influencer helping brands connect with their audience through
              authentic storytelling.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/auth" className="text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                sendthosebucks@gmail.com
              </p>
              <p className="text-gray-400">Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Lakshay Chaudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
