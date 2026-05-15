
import about from "../assets/about.jfif"
import sustainability from "../assets/sustainability.svg"
import Quality from "../assets/Quality.svg"
import design from "../assets/design.svg"

function About() {
  return (
    <>
     
      <div className="bg-[#FCF3E7] min-h-screen font-sans">
        
       
        <div className="max-w-7xl m-auto pt-32 pb-44 px-6">
          
          <div className="flex flex-col items-center">
            
            
            
            <h1 className="text-5xl md:text-7xl  text-center mb-24 tracking-tight mt-20">
              Where Heritage Meets Modernity
            </h1>

           
           
            <div className="flex flex-col items-center text-center">
              
             
              <p className="max-w-[45ch] text-xl md:text-2xl leading-loose font-light text-gray-800 italic mb-8">
                Founded in 1987, Hartmann has become synonymous with luxury furniture
                 that stands the test of time. We combine Old World craftsmanship with contemporary 
                 design sensibilities to create pieces that elevate any space.
              </p>

              
            </div>

            
            <div className="w-20 h-0.5 bg-[rgba(188,95,19,0.3)] mt-20"></div>

          </div>
          


        <section className="flex flex-col md:flex-row justify-between items-start gap-12 py-20 px-4 max-w-7xl mx-auto">
            
          
            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] font-medium text-gray-500 mb-8 uppercase">
                Our Story
              </p>
              
              <h1 className="text-5xl font-serif mb-10 leading-tight text-black max-w-sm">
                A Legacy Built on Passion
              </h1>
              
              <div className="space-y-8 text-gray-700 leading-relaxed max-w-md text-sm md:text-base">
                <p>
                  For nearly four decades, we have been dedicated to the art of creating furniture that transcends
                  trends and embraces timeless elegance. Each piece is a testament to our unwavering commitment to
                  craftsmanship and design excellence.
                </p>

                <p>
                  Our journey began in a small workshop in the heart of Copenhagen,
                  where passion met precision. What started as a two-person operation
                  has grown into a globally recognized brand, yet we've never lost sight of our roots.
                </p>

                <p>
                  Today, we continue that legacy, hand-selecting premium materials and employing
                  traditional techniques alongside modern innovation to create pieces that tell a story—your story.
                </p>
                
                <div className="pt-4">
                  <a href="#" className="text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                    Explore Our Collection
                  </a>
                </div>
              </div>
            </div>

          
            <div className="flex-1 w-full h-full">
              <img 
                src={about} 
                alt="Craftsmanship detail"  
                className="w-full h-auto object-cover aspect-square md:aspect-4/5"
              />
            </div>

          </section>




               <section className="max-w-4xl mx-auto py-24 px-6 flex flex-col items-center">
 
                  <p className="text-xs tracking-[0.3em] font-medium text-gray-500 uppercase mb-4">
                    Our Journey
                  </p>

                  <h1 className="text-6xl font-serif text-black mb-20">
                    Milestones
                  </h1>

               
               
                  <div className="w-full space-y-16">
                    
                   
                    <div className="border-b border-gray-200 pb-12">
                      <h2 className="text-4xl font-serif text-[rgba(188,95,19,1)] mb-6">
                        1987
                      </h2>
                      <h3 className="text-xl font-semibold text-black mb-4">
                        The Beginning
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        Michael Hartmann opens a small furniture workshop in Copenhagen with a 
                        vision to create timeless pieces.
                      </p>
                    </div>



                   
                    <div className="border-b border-gray-200 pb-12">
                      <h2 className="text-4xl font-serif text-[rgba(188,95,19,1)] mb-6">
                        1995
                      </h2>
                      <h3 className="text-xl font-semibold text-black mb-4">
                        International Recognition
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        Our first collection debuts at Milan Design Week, earning critical acclaim and 
                        expanding into European markets.
                      </p>
                    </div>


                    <div className="border-b border-gray-200 pb-12">
                      <h2 className="text-4xl font-serif text-[rgba(188,95,19,1)] mb-6">
                        2005
                      </h2>
                      <h3 className="text-xl font-semibold text-black mb-4">
                        Sustainable Commitment
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        Launch of our sustainability initiative, partnering with certified forests and implementing eco-friendly production methods.
                      </p>
                    </div>


                    <div className="border-b border-gray-200 pb-12">
                      <h2 className="text-4xl font-serif text-[rgba(188,95,19,1)] mb-6">
                       2015
                      </h2>
                      <h3 className="text-xl font-semibold text-black mb-4">
                       Global Expansion
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        Opening of flagship showrooms in New York, London, and Tokyo, bringing Hartmann to a worldwide audience.
                      </p>
                    </div>


                    <div className="border-b border-gray-200 pb-12">
                      <h2 className="text-4xl font-serif text-[rgba(188,95,19,1)] mb-6">
                       2024
                      </h2>
                      <h3 className="text-xl font-semibold text-black mb-4">
                        Innovation & Heritage
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        Celebrating nearly four decades while introducing our most innovative collection yet, blending traditional craftsmanship with cutting-edge design.
                      </p>
                    </div>



                  </div>
                </section>

                <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col items-center">
               
                  <p className="text-xs tracking-[0.3em] font-medium text-gray-500 uppercase mb-6">
                    CORE VALUES
                  </p>
                  <h1 className="text-5xl md:text-6xl font-serif text-black mb-6">
                    Our Philosophy
                  </h1>
                  <p className="text-gray-600 mb-20 text-center italic">
                    Three principles guide everything we create
                  </p>

                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
                 
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 border border-[rgba(188,95,19,0.4)] flex items-center justify-center mb-8">
                        <img src={Quality} alt="Quality" className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="text-2xl font-serif mb-6 text-black">Quality</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        We source only the finest materials and employ master craftsmen who 
                        understand that every detail matters. Our rigorous standards ensure 
                        each piece meets the highest benchmarks of excellence.
                      </p>
                    </div>

                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 border border-[rgba(188,95,19,0.4)] flex items-center justify-center mb-8">
                        <img src={design} alt="Design" className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="text-2xl font-serif mb-6 text-black">Design</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Our designs embrace minimalism without sacrificing warmth. Each piece is 
                        thoughtfully conceived to balance form and function, creating furniture that
                        enhances your space with quiet sophistication.
                      </p>
                    </div>

                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 border border-[rgba(188,95,19,0.4)] flex items-center justify-center mb-8">
                        <img src={sustainability} alt="Sustainability" className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="text-2xl font-serif mb-6 text-black">Sustainability</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        We are committed to responsible practices, from sustainably sourced wood to 
                        eco-conscious production methods. Beautiful furniture should never come 
                        at the expense of our planet.
                      </p>
                    </div>

                  </div>
                </section> 
                  
       

        </div>
      </div>

     
    </>
  );
}

export default About;