import Image from "next/image"
import { Instagram, Facebook, Youtube } from "lucide-react"

export default function KavyaFilmWebsite() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-stone-300 via-transparent to-stone-300"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Movie Poster */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 shadow-2xl rounded-lg overflow-hidden">
              <Image
                src="/poster.jpg"
                alt="Kavya Movie Poster - A parent's weathered hand resting on a schoolbook with child's silhouette in background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Title and Tagline */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-stone-800 leading-tight">Kavya</h1>
            <p className="text-xl md:text-2xl text-stone-600 italic font-light leading-relaxed max-w-md">
              "Some sacrifices are written in silence."
            </p>
          </div>
        </div>
      </section>

      {/* Plot Synopsis Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">The Story</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
                This narrative centers on the quiet, often unseen efforts of a parent striving to overcome a significant
                past and build a secure future for their child. From humble beginnings, they dedicate themselves to an
                uphill battle, facing countless personal and external challenges. As the child matures, they gradually
                piece together the true depth of their parent's resilience and selfless devotion, leading to a powerful
                moment of mutual appreciation and unspoken understanding.
              </p>
            </div>
          </div>

          {/* Decorative divider inspired by Nepali Dhaka pattern */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-2 h-2 bg-amber-600 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 text-center mb-16">Cast</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
            {/* Lead 1 */}
            <div className="text-center space-y-6">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/actor.jpg?height=200&width=200"
                  alt="Salon Basnet portrait"
                  fill
                  className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-stone-800">Salon Basnet</h3>
                <p className="text-lg text-stone-600">Pawan (The Father)</p>
              </div>
            </div>

            {/* Lead 2 */}
            <div className="text-center space-y-6">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/actress.png?height=200&width=200"
                  alt="Diya Maskey portrait"
                  fill
                  className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-stone-800">Angel KC</h3>
                <p className="text-lg text-stone-600">Kavya (The Child)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crew Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 text-center mb-16">Key Crew</h2>

          <div className="space-y-8">
            {[
              { role: "Director", name: "Padam Bahadur Sunar" },
              { role: "Producer", name: "Pawan Bogati" },
              { role: "Writer", name: "Manisha Tamang" },
              { role: "Cinematographer (DOP)", name: "Durga Prasad Ojha" },
              { role: "Editor", name: "Ramesh Chaudhary" },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-stone-200 last:border-b-0"
              >
                <div className="font-semibold text-lg text-stone-800 mb-1 sm:mb-0">{member.role}</div>
                <div className="text-lg text-stone-600">{member.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 bg-stone-800 text-stone-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-sm">© 2024 Royal Entertainment Productions. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
