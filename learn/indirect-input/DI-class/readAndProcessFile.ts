import { readFileSync } from "fs";

export class ReadAndProcessFile {
  run(filePath: string) {
    const content = readFileSync(filePath, { encoding: "utf-8" });

    return content + "->unit test";
  }
}