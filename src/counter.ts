export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `You\'ve Clicked ${counter} times.`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
