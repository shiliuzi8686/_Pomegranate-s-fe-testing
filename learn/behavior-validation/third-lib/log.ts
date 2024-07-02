export const logObj = {
  data: [],
  addData(data){
    this.data.push(data)
  }
}

export function log(data){
  logObj.addData(data)
}