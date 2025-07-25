import Image from "next/image"
import { Award, Users, TrendingUp, Quote, Calendar, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    icon: Users,
    title: "500K+ Followers",
    description: "Across all social media platforms",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Top Creator Award",
    description: "Social Media Excellence 2023",
    color: "text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "10M+ Views",
    description: "Total content engagement",
    color: "text-pink-500",
  },
  {
    icon: Star,
    title: "4.9/5 Rating",
    description: "From 2000+ course students",
    color: "text-yellow-500",
  },
]
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Content Creator",
    image: "/people-1.jpg", 
    content:
      "Lakshay's mentorship completely transformed my content strategy. His practical approach and genuine care for his students' success is unmatched.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Digital Marketer",
    image: "/people-2.jpg", 
    content:
      "The Instagram Growth Blueprint course gave me the exact roadmap I needed. Went from 5K to 50K followers in just 6 months!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Brand Manager",
    image: "/people-3.jpg", 
    content:
      "Working with Lakshay on our brand campaigns has been incredible. His understanding of audience psychology and content trends is exceptional.",
    rating: 5,
  },
]


const timeline = [
  {
    year: "2019",
    title: "Started Content Creation",
    description: "Began creating content on Instagram with a focus on lifestyle and motivation",
  },
  {
    year: "2020",
    title: "First Viral Video",
    description: "Created a video that reached 1M+ views, marking the beginning of rapid growth",
  },
  {
    year: "2021",
    title: "Brand Collaborations",
    description: "Started working with major brands and launched first digital course",
  },
  {
    year: "2022",
    title: "Community Building",
    description: "Built a community of 100K+ creators and launched mentorship programs",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received Top Creator Award and expanded to multiple platforms",
  },
  {
    year: "2024",
    title: "Scaling Impact",
    description: "Launched comprehensive course platform and merchandise line",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                My <span className="gradient-text">Story</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From a curious college student in Muzaffarnagar to one of India’s most recognized digital creators — my journey is driven by authentic storytelling and real connections. Over the years, I’ve built a loyal audience by blending humor, social commentary, and relatable content that sparks conversation, challenges norms, and inspires change.
              </p>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Muzaffarnagar, Utterpradesh, India
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  5+ Years Experience
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <Image
                  src="/MY-story.jpg"
                  alt="Lakshay Chaudhary"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>

              {/* <Image
                src="/MY-story.jpg height=500&width=400"
                alt="Lakshay Chaudhary"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl"
              /> */}
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-4 rounded-xl">
                <p className="font-semibold">500K+ Followers</p>
                <p className="text-sm opacity-90">Across Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-4xl font-bold mb-8 text-center">
              The <span className="gradient-text">Journey</span>
            </h2>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-xl">
                It all started in 2019 when I was just another college student with big dreams and a smartphone. Growing
                up in Muzaffarnagar, I was always fascinated by the power of storytelling and how digital platforms could
                connect people across the globe.
              </p>

              <p>
                My first video was a simple motivational post about overcoming challenges in college. I never expected
                it to resonate with so many people, but within a week, it had thousands of views and hundreds of
                comments from people sharing their own stories. That's when I realized the true power of authentic
                content.
              </p>

              <p>
                The journey wasn't always smooth. There were months when growth stagnated, times when I questioned
                whether I was on the right path, and moments when balancing content creation with studies seemed
                impossible. But every message from someone saying my content helped them through a difficult time
                reminded me why I started.
              </p>

              <p>
                As my following grew, so did the opportunities. Brands started reaching out, fellow creators wanted to
                collaborate, and people began asking me to teach them what I'd learned. That's when I realized I had a
                responsibility to share my knowledge and help others avoid the mistakes I made.
              </p>

              <p>
                Today, I'm proud to have built not just a following, but a community. A community of creators,
                entrepreneurs, and dreamers who support each other's growth. My courses have helped thousands of people
                start their own content creation journeys, and seeing their success stories is what motivates me every
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milestones that mark my journey in the digital creator space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700">
                <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-gray-400 text-lg">Key moments that shaped my creator journey</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Testimonials from students, collaborators, and community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 card-hover">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || ".svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-purple-500 opacity-50 absolute -top-2 -left-2" />
                  <p className="text-gray-300 italic pl-6">{testimonial.content}</p>
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
            Ready to Start Your <span className="gradient-text">Journey</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of creators who have transformed their content game and built successful personal brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">Explore Courses</Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4 bg-transparent">
              Connect With Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
