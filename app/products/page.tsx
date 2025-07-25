import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "Content Creation Mastery",
    description: "Learn the art of creating engaging content that converts. From ideation to execution.",
    price: "₹4,999",
    originalPrice: "₹7,999",
    rating: 4.8,
    students: 1250,
    duration: "8 hours",
    image: "/Content-creation1st-Thumbnail.jpg", 
    category: "Course",
  },
  {
    id: 2,
    title: "Instagram Growth Blueprint",
    description: "Complete guide to growing your Instagram following organically and building a personal brand.",
    price: "₹2,999",
    originalPrice: "₹4,999",
    rating: 4.9,
    students: 2100,
    duration: "6 hours",
    image: "/Instagram-tips-Thumbnail.jpg",
    category: "Course",
  },
  {
    id: 3,
    title: "Brand Collaboration Secrets",
    description: "How to land high-paying brand deals and build long-term partnerships with companies.",
    price: "₹3,499",
    originalPrice: "₹5,999",
    rating: 4.7,
    students: 850,
    duration: "5 hours",
    image: "/Brand-collaberation-Thumbnail.jpg",
    category: "Course",
  },
]

const merchandise = [
  {
    id: 4,
    title: "LC Signature Hoodie",
    description: "Premium quality hoodie with the iconic LC logo. Perfect for content creators.",
    price: "₹1,999",
    originalPrice: "₹2,999",
    rating: 4.6,
    image: "/Hoddie-Image.jpg",
    category: "Merchandise",
  },
  {
    id: 5,
    title: "LC luxury Perfume",
    description: "Specially designed for a Luxury vibe",
    price: "₹799",
    originalPrice: "₹1,199",
    rating: 4.8,
    image: "/LC-Luxury-perfume.jpg",
    category: "Merchandise",
  },
  {
    id: 6,
    title: "LC Phone Case Collection",
    description: "Stylish phone cases available for all major phone models with unique designs.",
    price: "₹599",
    originalPrice: "₹899",
    rating: 4.5,
    image: "/LC-Phone-case_page-0001.jpg",
    category: "Merchandise",
  },
]

const allProducts = [...courses, ...merchandise]

export default function ProductsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Products & Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock your potential with my premium courses and exclusive merchandise designed for aspiring creators and
            entrepreneurs.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Premium <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn from my experience and accelerate your journey as a content creator with these comprehensive
              courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-800 rounded-xl overflow-hidden card-hover border border-gray-700">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {course.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-green-400">{course.price}</span>
                      <span className="text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                  </div>

                  <Link href={`/products/${course.id}`}>
                    <Button className="w-full btn-primary">
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Exclusive <span className="gradient-text">Merchandise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Show your support and join the community with our premium merchandise collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchandise.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden card-hover border border-gray-700">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <div className="flex items-center mb-4 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    {item.rating}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-green-400">{item.price}</span>
                      <span className="text-gray-500 line-through ml-2">{item.originalPrice}</span>
                    </div>
                  </div>

                  <Link href={`/products/${item.id}`}>
                    <Button className="w-full btn-primary">
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Level Up</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of creators who have transformed their content game with my courses and resources.
          </p>
          <Button className="btn-primary text-lg px-8 py-4">
            Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
