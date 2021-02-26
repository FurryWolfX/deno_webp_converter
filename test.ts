import { convert } from "./mod.ts";

await convert("./logo.png", "./logo.webp", "-q 80", "-v");
