import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 16px;

  ${breakpoint('desktop')`
    margin: 0 auto;
    width: calc(100% / 2.5);
  `}

  > span {
    margin-top: auto;
    text-align: center;
    font-size: 14px;

    ${breakpoint('desktop')`
      font-size: 16px;
    `}
  }
`
