import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  ${breakpoint('desktop')`
    margin: 0 auto;
    min-height: 100vh;
    width: calc(100% / 2.5);
  `}

  > p {
    font-size: 14px;
    margin-top: 16px;
    text-align: center;

    ${breakpoint('desktop')`
      margin-top: auto;
      font-size: 16px;
    `}
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${breakpoint('desktop')`
    min-height: unset;
  `}
`
