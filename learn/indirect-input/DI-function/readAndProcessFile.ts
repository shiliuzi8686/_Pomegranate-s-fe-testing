import { readFileSync } from "fs";

export function readAndProcessFile(
  filePath: string,
): string {
  const content: string = readFileSync(filePath, { encoding: "utf-8" });
  // 在实际的场景下可能 process 的过程会更复杂一点
  return content + "-> test unit";
}