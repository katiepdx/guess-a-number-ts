import React, { useState } from 'react'
import { getRandomNumber, checkGuess } from '../utils'

export const Game = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber())
  const [triesLeft, setTriesLeft] = useState(3);
  const [guess, setGuess] = useState(null)
  const [toaster, setToaster] = useState('')

  function handleGuessChange(e: any) {
    setGuess(e.target.value)
  }
  function checkWin() {
    if (!guess) {
      setToaster('Oops! Please enter a guess.')
      return setTimeout(() => {
        setToaster('')
      }, 2000);
    }

    const gameCondition = checkGuess(Number(guess), randomNumber);

    if (gameCondition === -1) {
      setToaster('Oh no, too low.')
      setTimeout(() => {
        setToaster('')
      }, 2000);
      setTriesLeft(triesLeft - 1)
    } else if (gameCondition === 1) {
      setToaster('Yikes! Too high.')
      setTimeout(() => {
        setToaster('')
      }, 2000);
      setTriesLeft(triesLeft - 1)
    }
    if (gameCondition === 0) {
      setToaster('NICE! You guessed it!')
      setTimeout(() => {
        setToaster('')
      }, 2000);
      setRandomNumber(getRandomNumber())
      setGuess(null)
      setTriesLeft(3)
    }
  }

  return (
    <div>
      <p>{toaster}</p>
      <h1>Let's Play Guess A Number</h1>
      <p>I am thinking of a number between 1 and 10. You have 3 tries to guess the correct number. You can do it!</p>

      <p>Tries Left: {triesLeft}</p>
      <p>ANS: {randomNumber}</p>

      <label>
        Your Guess:
        <input type="number" onChange={handleGuessChange} />
      </label>

      <button onClick={checkWin}>Guess!</button>
    </div >
  )
}
