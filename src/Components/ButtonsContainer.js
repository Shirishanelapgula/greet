import {Button, Item} from './StyledComponent'

const ButtonsContainer = props => {
  const {details, changeButton, activeButton} = props

  const changeActive = () => {
    changeButton(details.id)
  }

  const isActive = activeButton === details.id

  return (
    <Item>
      <Button onClick={changeActive} isActive={isActive}>
        {details.buttonText}
      </Button>
    </Item>
  )
}

export default ButtonsContainer
