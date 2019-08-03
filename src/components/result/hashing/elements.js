import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const Header = styled.header`
  font-family: 'Pacifico', cursive;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`

const getBackgroundColor = props => {
  if (props.isPressed) {
    return '#126d52'
  }

  return '#11604e'
}

export const Content = styled.p`
  background-color: ${getBackgroundColor};
  border-radius: 8px;
  border: 1px solid transparent;
  color: #efefef;
  cursor: pointer;
  font-size: 16px;
  min-height: 80px;
  padding: 16px;
  word-wrap: break-word;
`
