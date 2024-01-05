import './index.css'

const imageItem = props => {
  const {eachItem, onClickImageItem} = props
  const {id, thumbnailUrl} = eachItem

  const onClickImage = () => {
    onClickImageItem(id)
  }

  return (
    <li className="each-image-container">
      <button
        type="button"
        className="each-image-button"
        onClick={onClickImage}
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="each-image-thumbnail"
        />
      </button>
    </li>
  )
}

export default imageItem
