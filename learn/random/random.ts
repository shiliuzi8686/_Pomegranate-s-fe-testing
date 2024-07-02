/**
 * 基于 Math.random 生成一个随机字符串
 * @param length 字符串长度
 * @returns 随机字符串
 */

export function generateRandomString(length: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for(let i = 0; i < length; i++){
    const randomIndex = Math.random() * chars.length
    result += chars.charAt(randomIndex)
  }
  return result
}