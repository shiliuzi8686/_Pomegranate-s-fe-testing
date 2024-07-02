export function delay() {
  return new Promise((resolve) => {
    resolve(1)
  });
}

export function delayV2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    })
  });
}