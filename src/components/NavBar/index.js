import './index.css'

const navbar = props => {
  const {score, timeCount} = props

  return (
    <ul className="navbar-container">
      <li className="navbar-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="navbar-logo"
        />
      </li>
      <li className="navbar-score-container">
        <p className="navbar-score-name">
          Score: <span className="navbar-score">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="navbar-time-image"
        />
        <p className="navbar-time">{timeCount} sec</p>
      </li>
    </ul>
  )
}

export default navbar
