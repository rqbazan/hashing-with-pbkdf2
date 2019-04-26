import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Input = styled.input.attrs({
  spellCheck: false,
  autocorrect: 'off'
})`
  -webkit-appearance: none;
  -webkit-box-shadow: 0 4px 0 0 black;
  background-color: #ebc732;
  border-radius: 8px;
  border: 2px solid black;
  box-shadow: 0 4px 0 0 black;
  flex-shrink: 0;
  font-size: 16px;
  height: 48px;
  outline: none;
  padding: 0 16px;
`

export const Title = styled.p`
  flex-shrink: 0;
  font-family: 'Pacifico', cursive;
  font-size: 28px;
  text-align: center;
  margin-bottom: 16px;

  ${breakpoint('desktop')`
    font-size: 48px;
    margin-bottom: 24px;
  `}
`
