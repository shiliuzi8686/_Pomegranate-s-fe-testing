import { ReadAndProcessFile, FileReader } from "./readAndProcessFile";
import { readFileSync } from "fs";

class TestFileReader implements FileReader {
  read(filePath: string): string {
    return readFileSync(filePath, "utf-8");
  }
}

const result = new ReadAndProcessFile();
result.setFileReader(new TestFileReader())

console.log(result.run("example.txt"));