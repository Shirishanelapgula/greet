import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Head = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  padding-top: 10px;
`
export const Buttons = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Button = styled.button`
  height: 30px;
  width: 80px;
  border: 2px solid #db1c48;
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffffff')};
  border-radius: 10px;
  margin: 10px;
`
export const Image = styled.img`
  height: 300px;
  width: 300px;
  margin: 10px;
`

export const Item = styled.li`
  margin: 5px;
`
