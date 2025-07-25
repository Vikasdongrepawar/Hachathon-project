
// app/products/[id]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users, CheckCircle, Play, ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { notFound } from "next/navigation"

type ProductType = {
  id: number
  title: string
  description: string
  price: string
  originalPrice: string
  rating: number
  image: string
  category: string
  type: "course" | "merchandise"
  students?: number
  duration?: string
  modules?: string[]
  features: string[]
  colors?: string[]
  sizes?: string[]
}

const getProductById = (id: string): ProductType | null => {
  const products: Record<string, ProductType> = {
    "1": {
      id: 1,
      title: "Content Creation Mastery",
      description:
        "Learn the art of creating engaging content that converts. From ideation to execution, this comprehensive course covers everything you need to know to become a successful content creator.",
      price: "₹4,999",
      originalPrice: "₹7,999",
      rating: 4.8,
      students: 1250,
      duration: "8 hours",
      image: "/Content-creation1st-Thumbnail.jpg",
      category: "Course",
      type: "course",
      modules: [
        "Content Strategy & Planning",
        "Visual Storytelling Techniques",
        "Video Production Basics",
        "Social Media Optimization",
        "Analytics & Performance Tracking",
        "Monetization Strategies",
      ],
      features: [
        "Lifetime Access",
        "Certificate of Completion",
        "Private Community Access",
        "1-on-1 Mentorship Session",
        "Resource Downloads",
        "Mobile & Desktop Access",
      ],
    },
    "4": {
      id: 4,
      title: "LC Signature Hoodie",
      description:
        "Premium quality hoodie made from 100% organic cotton with the iconic LC logo. Perfect for content creators who want to represent the community in style.",
      price: "₹1,999",
      originalPrice: "₹2,999",
      rating: 4.6,
      image: "/Hoddie-Image.jpg",     ////////
      category: "Merchandise",
      type: "merchandise",
      features: [
        "100% Organic Cotton",
        "Unisex Design",
        "Available in S, M, L, XL, XXL",
        "Embroidered Logo",
        "Machine Washable",
        "Free Shipping",
      ],
      colors: ["Black", "Navy Blue", "Charcoal Gray"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  }

  return products[id] || null
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) return notFound()

  const price = parseInt(product.price.replace(/[^0-9]/g, ""))
  const original = parseInt(product.originalPrice.replace(/[^0-9]/g, ""))
  const discount = Math.round(((original - price) / original) * 100)

  return (
    <div className="pt-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-800/30 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span>/</span>
            <span className="text-white">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
            className="w-full rounded-xl object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
              product.type === "course" ? "bg-purple-600" : "bg-pink-600"
            }`}>
              {product.category}
            </span>
          </div>
          {product.type === "course" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                <Play className="mr-2 w-5 h-5" />
                Preview Course
              </Button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-300 text-lg">{product.description}</p>

          {/* Rating & Stats */}
          {product.type === "course" ? (
            <div className="flex gap-6 text-sm text-gray-400">
              <div className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-1" />{product.rating} ({product.students} students)</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{product.duration}</div>
              <div className="flex items-center"><Users className="w-4 h-4 mr-1" />{product.students} enrolled</div>
            </div>
          ) : (
            <div className="flex items-center text-sm text-gray-400">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              {product.rating} (125 reviews)
            </div>
          )}

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-bold text-green-400">{product.price}</span>
            <span className="text-xl line-through text-gray-500">{product.originalPrice}</span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Save {discount}%</span>
          </div>

          {/* Size & Color Selectors */}
          {product.type === "merchandise" && product.sizes && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button key={size} className="border border-gray-600 hover:border-purple-500 px-4 py-2 rounded-lg">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          {product.type === "merchandise" && product.colors && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button key={color} className="border border-gray-600 hover:border-purple-500 px-4 py-2 rounded-lg">
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="space-y-4">
            <Button className="w-full btn-primary text-lg py-4">
              <ShoppingCart className="mr-2 w-5 h-5" />
              {product.type === "course" ? "Enroll Now" : "Add to Cart"}
            </Button>
            <Button variant="outline" className="w-full btn-secondary">Add to Wishlist</Button>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {product.type === "course" ? "What You'll Get" : "Product Features"}
            </h3>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs for Courses */}
      {product.type === "course" && product.modules && (
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="mt-6">
              <div className="bg-gray-800 p-6 rounded-xl space-y-4">
                {product.modules.map((mod, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">{i + 1}</div>
                      <span>{mod}</span>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <Play className="w-4 h-4 mr-1" />45 min
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="mt-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <Image src="/placeholder.svg" alt="Lakshay" width={80} height={80} className="rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Lakshay Chaudhary</h3>
                    <p className="text-gray-400">Digital Creator & Content Strategist</p>
                  </div>
                </div>
                <p className="text-gray-300">With over 5 years of experience in digital marketing and content creation...</p>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="bg-gray-800 p-6 rounded-xl space-y-4">
                {[1, 2, 3].map((r) => (
                  <div key={r} className="border-b border-gray-700 pb-4 last:border-none">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-500 mr-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <span className="font-semibold">Priya Sharma</span>
                    </div>
                    <p className="text-gray-300">"This course completely transformed my approach to content creation."</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}






