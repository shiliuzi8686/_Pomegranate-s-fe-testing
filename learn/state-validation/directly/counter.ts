export class Counter {
  private count = 0;
  increment() {
    this.count++;
    this.count--;
    this.count++;
  }
  getCount() {
    return this.count;
  }
}