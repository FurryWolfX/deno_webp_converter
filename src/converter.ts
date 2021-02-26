import { path } from "../deps.ts";
import exec from "./exec.ts";
import cwebp from "./cwebp.ts";

export async function convert(
  input_image: string,
  output_image: string,
  option: string,
  logging = "-quiet",
) {
  const bin = await cwebp();
  if (bin) {
    const params: string[] = [
      bin,
      path.resolve(Deno.cwd(), input_image),
      "-o",
      path.resolve(Deno.cwd(), output_image),
      ...option.split(" "),
      logging,
    ]; // command to convert image
    await exec(params);
  } else {
    console.error("can not find bin");
  }
}

export async function batchConvert(
  dir: string,
  option: string,
  logging?: string,
) {
}
