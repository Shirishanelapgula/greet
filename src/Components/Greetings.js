import {useState} from 'react'
import ButtonsContainer from './ButtonsContainer'

import {Container, Head, Buttons, Image} from './StyledComponent'

const Greetings = props => {
  const {languageGreetingsList} = props

  const [activeButton, changeActiveButton] = useState(
    languageGreetingsList[0].id,
  )

  const changeButton = id => {
    changeActiveButton(id)
  }

  const data = languageGreetingsList.find(item => item.id === activeButton)

  return (
    <Container>
      <Head>Multilingual Greetings</Head>
      <Buttons>
        {languageGreetingsList.map(each => (
          <ButtonsContainer
            key={each.id}
            details={each}
            changeButton={changeButton}
            activeButton={activeButton}
          />
        ))}
      </Buttons>
      <Image src={data.imageUrl} alt={data.imageAltText} />
    </Container>
  )
}

export default Greetings
