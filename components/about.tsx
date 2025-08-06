import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-gray-950"
    >
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Image Column */}
          <div className="md:col-span-2">
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Grenish Rai"
                width={300}
                height={300}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-800"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h2 className="text-2xl font-medium text-gray-100 mb-4">About</h2>

              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  I'm a full stack developer and BCA graduate from Sikkim
                  Manipal Institute of Technology. What started as a casual
                  interest in web technologies quickly turned into a passion for
                  building meaningful digital experiences.
                </p>

                <p>
                  Outside of coding, I enjoy writing poetry and short stories.
                  This creative side helps me approach development with a unique
                  blend of logic and imagination.
                </p>

                <p>
                  I'm currently building <strong>Authrix</strong> a simple,
                  effective authentication and user management tool for indie
                  developers. With every project, I focus on clean code,
                  thoughtful design, and user-first functionality.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-100 mb-3">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "AI/ML",
                  "Rust",
                  "Python",
                  "Tailwind CSS",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-gray-400 px-3 py-1 rounded-full border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-2 space-y-2 text-sm text-gray-400">
              <p>📍 Based in India</p>
              <p>💼 Open for freelance projects</p>
              <p>📧 mrcoder2033d@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
