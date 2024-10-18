import { Command } from "@commander-js/extra-typings";
const program = new Command();

program
  .name("illustration-crawling")
  .description(
    "This program will create a database of illustrations from user's local storage."
  )
  .version("0.0.1");

program.parse();
