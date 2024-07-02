/**
 * 检测今天是不是周五
 * @return 
 * 周五返回开心
 * 不是周五返回难过
 */

export function checkFriday() {
  const date = new Date()
  if(date.getDay() === 5){
    return 'happy'
  } else {
    return 'sad'
  }
}