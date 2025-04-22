import Link from "next/link";
import MealsGrid from "../../components/meals/mealsGrid";
import { getMeals } from "../../utils/meals";
import { Suspense } from "react";
import LoadingMeals from "../meals/LoadingMeals";

async function MealsComponent() {
  const meals = await getMeals();
  console.log("meals=============",meals);
  
  return <MealsGrid meals={meals} />;
}

export default  function Meals() {
  return (
    <>
      <header className="mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl text-center  bg-black overflow-hidden p-8 mt-10 ">
        <h1 className="text-white font-extrabold text-4xl justify-center">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent text-4xl font-extrabold">
            by you
          </span>
        </h1>

        <p className="text-2xl text-white  my-5">
          Choose your favorite recipe and cook it yourself. It is easy and fun !
        </p>

        <Link
          href="/meals/share"
          className="text-md px-6 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff8a05] rounded-xl   border-2 hover:shadow-md"
        >
          Share Your Favorite Recipe
        </Link>
      </header>
      <main>
        <Suspense fallback={<LoadingMeals />}>
          <MealsComponent />
        </Suspense>
      </main>
    </>
  );
}
