export default async function (cmd: string[]) {
  const p = Deno.run({
    cmd: cmd,
    stdout: "inherit",
    stderr: "inherit",
  });
  return await p.status();
}
