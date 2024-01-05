import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ImageCategoryList from '../ImageCategoryList'
import ResultItem from '../ResultItem'
import './index.css'

class MatchGame extends Component {
  state = {
    selectedItemId: '',
    imageItem: '',
    score: 0,
    timeCount: 60,
    isPass: true,
    randomNo: '',
  }

  componentDidMount() {
    const {tabsList, imagesList} = this.props

    this.timeCounterId = this.timeCounter()

    this.setState({
      selectedItemId: tabsList[0].tabId,
      imageItem: imagesList[0],
      randomNo: 0,
    })
  }

  timeCounter = () => setInterval(this.tick, 1000)

  tick = () => {
    const {timeCount} = this.state

    if (timeCount === 0) {
      this.setState({isPass: false})
    } else {
      this.setState(prevState => ({
        timeCount: prevState.timeCount - 1,
      }))
    }
  }

  onClickSelectTabId = id => {
    this.setState({selectedItemId: id})
  }

  randomImage = () => {
    const {imagesList} = this.props

    const randomNumber = Math.floor(Math.random() * imagesList.length - 1)

    const randomImageItem = imagesList[randomNumber]

    return randomImageItem
  }

  onClickImageItem = imageId => {
    const {imageItem} = this.state
    const {id} = imageItem

    const randomImageItem = this.randomImage()

    // console.log(randomImageItem)
    this.setState(prevState => {
      if (id === imageId) {
        return {
          score: prevState.score + 1,
          imageItem: randomImageItem,
        }
      }
      return {isPass: false}
    })
  }

  playAgain = () => {
    const {tabsList, imagesList} = this.props
    this.timeCounterId = this.timeCounter()
    this.setState({
      selectedItemId: tabsList[0].tabId,
      imageItem: imagesList[0],
      score: 0,
      timeCount: 60,
      isPass: true,
    })
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {selectedItemId, imageItem, score, timeCount, isPass} = this.state
    const {id, imageUrl} = imageItem
    // console.log('Hello Working')

    // console.log(imageUrl)

    if (!isPass) {
      clearInterval(this.timeCounterId)
    }

    const filteredList = imagesList.filter(
      eachTab => eachTab.category === selectedItemId,
    )

    // console.log('result:', filteredList)

    return (
      <div className="app-container">
        <header>
          <NavBar score={score} timeCount={timeCount} />
        </header>
        {isPass && (
          <div className="match-game-container">
            <div className="main-match-container">
              <div className="match-container">
                <img
                  src={imageUrl}
                  alt={id}
                  className="main-match-game-image"
                />
              </div>

              <ul className="tab-list-container">
                {tabsList.map(eachTab => (
                  <TabItem
                    key={eachTab.tabId}
                    eachTab={eachTab}
                    onClickSelectTabId={this.onClickSelectTabId}
                    isActive={selectedItemId === eachTab.tabId}
                  />
                ))}
              </ul>
              <ul className="image-category-list-container">
                {filteredList.map(eachItem => (
                  <ImageCategoryList
                    key={eachItem.id}
                    eachItem={eachItem}
                    onClickImageItem={this.onClickImageItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
        {!isPass && (
          <div className="app-result-container">
            <ResultItem score={score} playAgain={this.playAgain} />
          </div>
        )}
      </div>
    )
  }
}
export default MatchGame
