import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { error } from "node:console";

const db = sql("public/meals.db"); // ✅ New


export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM  meals").all();
}
export async function getMealDetails(slug) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const meal = db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
    if (!meal) {
      throw new Error(`Meal with slug ${slug} not found`);
    }
    return meal;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    throw error;
  }
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instruction = xss(meal.instruction);

  const extension = meal.image.name?.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("saving image failed");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`INSERT INTO meals (title , summary, instructions, creator, creator_email, image,slug)
    VALUES(
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
    )
    `).run(meal);
}
