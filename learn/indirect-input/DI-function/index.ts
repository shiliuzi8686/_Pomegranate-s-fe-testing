import { readAndProcessFile, FileReader } from "./readAndProcessFile";
import { readFileSync } from "fs";

class TextFileReader implements FileReader {
  read(filePath: string): string {
    return readFileSync(filePath, "utf-8");
  }
}

// 在调用这个功能处，通过参数传入一个 FileReader 的实例，也就是原本的强依赖
const result = readAndProcessFile("example.txt", new TextFileReader());

console.log(result);