import chalk from "npm:chalk@5";

console.log("Hello World by Deno");

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

console.log(chalk.green("Hello!"));