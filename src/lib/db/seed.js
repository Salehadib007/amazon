import data from "../data.js";
import { cwd } from "process";
import pkg from "@next/env";
import { connectToDatabase } from "./connectToDatabase.js";
import Product from "./models/product.model.js";

const { loadEnvConfig } = pkg;

loadEnvConfig(cwd());

const main = async () => {
  try {
    console.log(data.products);

    await connectToDatabase(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(data.products);

    console.log({
      createdProducts,
      message: "Seeded database successfully",
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
