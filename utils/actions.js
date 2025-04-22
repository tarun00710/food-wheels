import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const validateInput = (text) => {
  return !text || text.trim() === " ";
};

export async function shareMeal(formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    validateInput(meal?.title) ||
    validateInput(meal.summary) ||
    validateInput(meal?.creator) ||
    validateInput(meal?.instructions) | !meal?.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    throw new Error("Invalis Inputs");
  }
  await saveMeal(meal);

  revalidatePath("/meals", "page");
  redirect("/meals");
}
