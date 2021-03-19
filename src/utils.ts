export function getRandomNumber(): number {
  return Math.ceil(Math.random() * 10)
}
export function checkGuess(guess: number, randomNumber: number): number | undefined {
  if (guess > randomNumber) return 1;
  if (guess === randomNumber) return 0;
  if (guess < randomNumber) return -1;
}

export function displayCheckMsg(
  guessCheckResult: number | undefined,
  setToaster: Function,
  setRandomNumber: Function,
  setGuess: Function,
  setTriesLeft: Function) {
  if (guessCheckResult === -1) {
    setToaster('Oh no, too low.')
    setTimeout(() => {
      setToaster('')
    }, 2000);

  } else if (guessCheckResult === 1) {
    setToaster('Yikes! Too high.')
    setTimeout(() => {
      setToaster('')
    }, 2000);

  } else if (guessCheckResult === 0) {
    setToaster('NICE! You guessed it.')
    setTimeout(() => {
      setToaster('')
    }, 2000);
    setRandomNumber(getRandomNumber())
    setGuess(null)
    setTriesLeft(3)
  }
}
