
import ImageSlideshow from "../components/Images/imageSlideShow"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden p-8 mt-30 ">
      <header className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
        <div className="flex-1 flex justify-center md:justify-start md:flex-basis-1/2">
         <ImageSlideshow />
        </div>

        <div className="flex-1 md:flex-basis-1/2 space-y-6 md:pl-12">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-4 text-center md:text-left">
            <span className="bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NEXT LEVEL FOOD FOR 
            </span>
          </h1>
          <p className="text-3xl mb-6 text-center md:text-left bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
          NEXT LEVEL FOODIES
          </p>
          <div className="space-y-4">
            <p className="text-lg text-center md:text-left">
              Taste and Share food from all over the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/community"
                className="bg-gradient-to-r from-[#f9572a] to-[#ff9b05] px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-center"
              >
                Join the Community
              </Link>
            
              <Link
                href="/meals"
                className="border-2 border-[#ff9b05] px-6 py-3 rounded-full hover:bg-[#ff9b05] hover:text-black transition-colors text-center"
              >
                Explore Meals 
                
              </Link>
              
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-20">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center relative mb-8">
            <span className="bg-black px-4 relative z-10">How it works</span>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff9b05] to-transparent z-0"></div>
          </h2>
          <p className="text-gray-300 text-center leading-relaxed">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center relative mb-8">
            <span className="bg-black px-4 relative z-10">
              Why NextLevel Food?
            </span>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff9b05] to-transparent z-0"></div>
          </h2>
          <p className="text-gray-300 text-center leading-relaxed">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers. NextLevel Food is a place to
            discover new dishes, and to connect with other food lovers.
          </p>
        </section>
      </main>
    </div>
  );
}
