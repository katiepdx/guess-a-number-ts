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
    <div className='game-container'>
      <Toaster message={toaster} />

      <section className={triesLeft === 0 ? 'hidden' : 'visible'}>
        <header>
          <h1>Let's Play Guess A Number</h1>
        </header>

        <section className="instructions">
          <p>I am thinking of a number between 1 and 10. You have 3 tries to guess the correct number. You can do it!</p>

          <p>Tries Left: {triesLeft}</p>
          <p>{randomNumber}</p>
        </section>

        <section className="game">
          <label htmlFor="guess">
            <p>Your Guess</p>
            <input type="number" id="guess" name="guess" onChange={handleGuessChange} />
          </label>

          <button onClick={checkWin}>Guess!</button>
        </section>
      </section>

      {/* GAME OVER */}
      <h1 className={triesLeft === 0 ? 'visible' : 'hidden'}>Oh no... no more tries left</h1>
    </div >
  )
}
