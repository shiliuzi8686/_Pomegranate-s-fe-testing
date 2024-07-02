export class View {
  count: number = 0;
  render() {
    Promise.resolve()
      .then(() => {
        this.count++;
      })
      .then(() => {
        this.count++;
      });
  }
}