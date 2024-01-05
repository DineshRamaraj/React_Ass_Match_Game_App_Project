import './index.css'

const tabItem = props => {
  const {eachTab, onClickSelectTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const changeTabItem = () => {
    onClickSelectTabId(tabId)
  }

  const selectedTabColor = isActive ? 'selected-tab' : ''

  return (
    <li className="each-tab-item">
      <button
        type="button"
        className={`${selectedTabColor} each-tab-button`}
        onClick={changeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default tabItem
