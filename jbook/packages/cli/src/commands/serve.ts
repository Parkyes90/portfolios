import path from "path";
import { Command } from "commander";
import { serve } from "local-api";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing ")
  .option("-p, --port <number>", "port to run server on", "4005")
  .action(async (filename = "notebook.js", options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port, 10), path.basename(filename), dir);
    } catch (e) {
      console.log("Here's the problem", e.message);
    }
  });
