export class User {
  private id: string
  constructor(id: string) {
    this.id = id
  }
  fetchData(callback: (data: string) => void, delay: number) {
    setTimeout(() => {
      callback(`Data for user ${this.id}`)
    }, delay)
  }
  fetchDataV2(callback: (data: string) => void) {
    setTimeout(() => {
      callback(`Data for user ${this.id}`)
    }, 2000)
  }
}