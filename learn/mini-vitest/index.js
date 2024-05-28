import {glob} from 'glob';
import fs from 'fs/promises';
import { build } from 'esbuild';
/**
 * 1、获取所有的测试文件的路径
 * 2、读取文件内容
 * 3、打包文件内容，将vitest 中的测试函数「test、it 等」打包进 spec.js 测试文件中。
 *    这个打包直接打包 *.spec.js 文件即可，*.spec.js 文件引入了./core.js 文件中的内容，所以会将 core.js 文件也打包进去。
 * 4、执行打包后的文件
 */

// 同步方式获取文件列表
const files = glob.sync('*.spec.js'); // ["vitest.spec.js",]

for (const file of files) {
  const content = await fs.readFile(file, 'utf-8');
  console.log('content', content);
  await runModule(content + ";import {run} from './core.js';run()");
}

async function runModule(content) {
  const result = await build({
    bundle: true, // 打包
    write: false, // 不写入文件
    target: 'esnext', // 目标环境
    stdin: {
      contents: content, // 内容
      resolveDir: process.cwd(), // 解析目录
    },
  });
  // 转换后的代码
  const transformedCode = result.outputFiles[0].text;
  console.log('result', result.outputFiles[0].text);
  console.log('typeof result', typeof result.outputFiles[0].text);
  // 执行代码
  const runCode = new Function(transformedCode);
  runCode();
}

