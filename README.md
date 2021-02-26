# deno_webp_converter

a tool for converting images to webp

## usage

```ts
import { convert } from "https://deno.land/x/deno_webp_converter/mod.ts"

await convert("./logo.png", "./logo.webp", "-q 80", "-v");
```

## where is the bin?

By default, it will download to `${Deno.cwd()}/bin` .

You can call `setBinDirPath` to change the default path.

```ts
import { setBinDirPath } from "./src/cwebp.ts";
setBinDirPath(YOUR_PATH);
```
