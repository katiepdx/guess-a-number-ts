export function getRandomNumber(): number {
  return Math.ceil(Math.random() * 10)
}
export function checkGuess(guess: number, randomNumber: number): number | undefined {
  if (guess > randomNumber) return 1;
  if (guess === randomNumber) return 0;
  if (guess < randomNumber) return -1;
}
