import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

await new Command()
  .name("cliffy")
  .version("0.1.0")
  .description("Command line framework for Deno")
  .parse(Deno.args);
