import { download, exists, path } from "../deps.ts";

const platform = Deno.build.os;
const config = {
  binDirPath: path.resolve(Deno.cwd(), "bin"),
};

export function setBinDirPath(binDirPath: string) {
  config.binDirPath = binDirPath;
}

/**
 * Usage:
   cwebp [options] -q quality input.png -o output.webp
   where quality is between 0 (poor) to 100 (very good).
   Typical value is around 80.
 */
export default async function cwebp(): Promise<string> {
  let binName = "";
  let binFile: string;
  if (platform === "darwin") {
    binName = "cwebp_osx";
  } else if (platform === "linux") {
    binName = "cwebp_linux";
  } else if (platform === "windows") {
    binName = "cwebp_win64.exe";
  }

  binFile = path.resolve(config.binDirPath, binName);

  if (platform !== "windows") {
    await Deno.chmod(binFile, 0o764);
  }

  if (!(await exists(config.binDirPath))) {
    Deno.mkdirSync(config.binDirPath);
  }

  if (await exists(binFile)) {
    return binFile;
  } else {
    const destination = {
      file: binName,
      dir: config.binDirPath,
    };
    console.log(
      "downloading",
      `https://github.com/FurryWolfX/deno_webp_converter/raw/main/bin/${binName}`,
    );
    await download(
      `https://github.com/FurryWolfX/deno_webp_converter/raw/main/bin/${binName}`,
      destination,
    );
    return await cwebp();
  }
}
