import { path } from "../deps.ts";

const platform = Deno.build.os;
const arch = Deno.build.arch;

/**
 * Usage:
   cwebp [options] -q quality input.png -o output.webp
   where quality is between 0 (poor) to 100 (very good).
   Typical value is around 80.
 */
export default function cwebp() {
  if (platform === "darwin") {
    return path.resolve(Deno.cwd(), "bin/cwebp_osx"); //return osx library path
  } else if (platform === "linux") {
    return path.resolve(Deno.cwd(), "bin/cwebp_linux"); //return linux library path
  } else if (platform === "windows") {
    return path.resolve(
      Deno.cwd(),
      "bin/cwebp_win64.exe",
    ); // return windows 64bit library path
  } else {
    console.log("Unsupported platform:", platform, arch); //show unsupported platform message
  }
}
