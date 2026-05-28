import about from "../assets/about.jfif";
import Milestones from "../components/Milestones";
import OurPhilosophy from "../components/OurPhilosophy";

function About() {
  return (
    <>
      <div className="bg-[#FCF3E7] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
        <div className="max-w-7xl m-auto pt-32 pb-44 px-6">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl text-center mb-24 tracking-tight mt-20 text-black dark:text-white transition-colors">
              Where Heritage Meets Modernity
            </h1>

            <div className="flex flex-col items-center text-center">
              <p className="max-w-[45ch] text-xl md:text-2xl leading-loose font-light text-gray-800 dark:text-slate-300 italic mb-8 transition-colors">
                Founded in 1987, Hartmann has become synonymous with luxury
                furniture that stands the test of time. We combine Old World
                craftsmanship with contemporary design sensibilities to create
                pieces that elevate any space.
              </p>
            </div>

            <div className="w-20 h-0.5 bg-[rgba(188,95,19,0.3)] mt-20"></div>
          </div>

          <section className="flex flex-col md:flex-row justify-between items-start gap-12 py-20 px-4 max-w-7xl mx-auto">
            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] font-medium text-gray-500 dark:text-slate-400 mb-8 uppercase transition-colors">
                Our Story
              </p>

              <h1 className="text-5xl font-serif mb-10 leading-tight text-black dark:text-white max-w-sm transition-colors">
                A Legacy Built on Passion
              </h1>

              <div className="space-y-8 text-gray-700 dark:text-slate-400 leading-relaxed max-w-md text-sm md:text-base transition-colors">
                <p>
                  For nearly four decades, we have been dedicated to the art of
                  creating furniture that transcends trends and embraces
                  timeless elegance. Each piece is a testament to our unwavering
                  commitment to craftsmanship and design excellence.
                </p>

                <p>
                  Our journey began in a small workshop in the heart of
                  Copenhagen, where passion met precision. What started as a
                  two-person operation has grown into a globally recognized
                  brand, yet we've never lost sight of our roots.
                </p>

                <p>
                  Today, we continue that legacy, hand-selecting premium
                  materials and employing traditional techniques alongside
                  modern innovation to create pieces that tell a story—your
                  story.
                </p>

                <div className="pt-4">
                  <a
                    href="#"
                    className="text-xs font-bold tracking-widest uppercase border-b border-black dark:border-white pb-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-slate-400 hover:border-gray-500 dark:hover:border-slate-400 transition-colors"
                  >
                    Explore Our Collection
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full h-full">
              <img
                src={about}
                alt="Craftsmanship detail"
                className="w-full h-auto object-cover aspect-square md:aspect-4/5 rounded-2xl shadow-sm"
              />
            </div>
          </section>

          <section className="max-w-4xl mx-auto py-24 px-6 flex flex-col items-center">
            <p className="text-xs tracking-[0.3em] font-medium text-gray-500 dark:text-slate-400 uppercase mb-4 transition-colors">
              Our Journey
            </p>

            <h1 className="text-6xl font-serif text-black dark:text-white mb-20 transition-colors">
              Milestones
            </h1>

            <div className="w-full space-y-16">
              <Milestones />
            </div>
          </section>

          <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col items-center">
            <p className="text-xs tracking-[0.3em] font-medium text-gray-500 dark:text-slate-400 uppercase mb-6 transition-colors">
              CORE VALUES
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-black dark:text-white mb-6 transition-colors">
              Our Philosophy
            </h1>
            <p className="text-gray-600 dark:text-slate-400 mb-20 text-center italic transition-colors">
              Three principles guide everything we create
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
              <OurPhilosophy />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
