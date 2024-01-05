import './index.css'

const resultItem = props => {
  const {score, playAgain} = props

  const playAgainButton = () => {
    playAgain()
  }

  return (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="result-trophy"
      />
      <p className="result-score-heading">YOUR SCORE</p>
      <h1 className="result-score">{score}</h1>
      <button type="button" className="result-button" onClick={playAgainButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="result-reset"
        />
        <p className="result-play-again">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default resultItem
