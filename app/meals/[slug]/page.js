import Image from "next/image";
import { notFound } from "next/navigation";
import { getMealDetails } from "../../../utils/meals";

export async function generateMetadata({ params }) {
  const meal = await getMealDetails(params.slug);

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }) {
  const meal = await getMealDetails(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal?.instructions?.replace(/\n/g, "<br />");

  return (
    <>
      <header className="flex flex-col md:flex-row items-center gap-12 px-4 py-8 max-w-5xl mx-auto">
        <div className="relative w-full md:w-96 h-80">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-lg animate-fade-slide-left"
          />
        </div>
        <div className="text-[#ddd6cb] max-w-3xl animate-fade-slide-right">
          <h1 className="text-4xl font-bold uppercase font-montserrat text-shadow-md">
            {meal.title}
          </h1>
          <p className="text-lg italic text-[#cfa69b] mt-2">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:text-shadow-md transition-all"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-lg mt-4">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-lg leading-relaxed bg-[#6e6464] text-[#13120f] rounded-lg shadow-lg px-8 py-6 max-w-3xl mx-auto mt-8 animate-fade-slide-bottom"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
