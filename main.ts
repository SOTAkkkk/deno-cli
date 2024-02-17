import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

new Command()
  // Main command.
  .name("gyomu")
  .version("0.1.0")
  .description("業務効率化ツール")
  .usage("[options]")
  .parse(Deno.args)
