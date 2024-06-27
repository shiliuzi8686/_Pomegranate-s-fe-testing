export interface FileReader {
  read(filePath: string): string;
}
// 构造器
// export class ReadAndProcessFile {
//   private _fileReader: FileReader;
//   constructor(fileReader: FileReader) {
//     this._fileReader = fileReader;
//   }
//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);

//     return content + "->unit test";
//   }
// }

// // 属性
// export class ReadAndProcessFile {
//   private _fileReader: FileReader;
//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);

//     return content + "->unit test";
//   }
//   get fileReader() {
//     return this._fileReader;
//   }
//   set fileReader(fileReader: FileReader) {
//     this._fileReader = fileReader;
//   }
// }

// 方法
export class ReadAndProcessFile {
  private _fileReader: FileReader;
  run(filePath: string) {
    const content = this._fileReader.read(filePath);

    return content + "->unit test";
  }
  setFileReader(fileReader: FileReader) {
    this._fileReader = fileReader;
  }
}