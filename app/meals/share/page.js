import ImagePicker from "../../../components/meals/ImagePicker/index";
import { shareMeal } from "../../../utils/actions";
import MealsFormSubmit from "../../../components/meals/mealsFormSubmit";


export default function ShareMealPage() {
  return (
    <div className="min-h-screen mt-8 flex flex-col justify-between">
      <header className="gap-12  mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl relative">
        <h1 className="font-montserrat text-4xl">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] mx-auto text-white">
        <form className="max-w-[50rem] space-y-6" action={shareMeal}>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-bold uppercase font-montserrat text-[#b3aea5]"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border rounded-md bg-[#1c2027] text-[#ddd6cb] border-[#454952] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-bold uppercase font-montserrat text-[#b3aea5]"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border rounded-md bg-[#1c2027] text-[#ddd6cb] border-[#454952] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-base font-bold uppercase font-montserrat text-[#b3aea5]"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full p-2 border rounded-md bg-[#1c2027] text-[#ddd6cb] border-[#454952] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-base font-bold uppercase font-montserrat text-[#b3aea5]"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full p-2 border rounded-md bg-[#1c2027] text-[#ddd6cb] border-[#454952] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-base font-bold uppercase font-montserrat text-[#b3aea5]"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="w-full p-2 border rounded-md bg-[#1c2027] text-[#ddd6cb] border-[#454952] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>
          <ImagePicker name="image" />
         
          <p className="text-right m-3">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </div>
  );
}
