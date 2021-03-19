import { useState } from 'react'
import { getRandomNumber, checkGuess, displayCheckMsg } from '../utils'
import { Toaster } from './Toaster'

export const Game = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber())
  const [triesLeft, setTriesLeft] = useState(3);
  const [guess, setGuess] = useState(null)
  const [toaster, setToaster] = useState('')

  function handleGuessChange(e: any) {
    setGuess(e.target.value)
  }

  function checkWin() {
    // check for an empty guess
    if (!guess) {
      setToaster('Oops! Please enter a guess.')
      return setTimeout(() => {
        setToaster('')
      }, 2000);
    }

    // decrement triesLeft
    setTriesLeft(triesLeft - 1)

    // compare numbers
    const guessCheckResult = checkGuess(Number(guess), randomNumber)

    // display result using guessCheckResult
    displayCheckMsg(guessCheckResult, setToaster, setRandomNumber, setGuess, setTriesLeft)
  }

  return (
    <div>
      <Toaster message={toaster} />

      <section className={triesLeft === 0 ? 'hidden' : 'visible'}>
        <h1>Let's Play Guess A Number</h1>

        <p>I am thinking of a number between 1 and 10. You have 3 tries to guess the correct number. You can do it!</p>

        <p>Tries Left: {triesLeft}</p>
        <p>{randomNumber}</p>
        <label>
          Your Guess:
        <input type="number" onChange={handleGuessChange} />
        </label>

        <button onClick={checkWin}>Guess!</button>
      </section>

      {/* GAME OVER */}
      <h1 className={triesLeft === 0 ? 'visible' : 'hidden'}>Oh no... no more tries left</h1>
    </div >
  )
}
