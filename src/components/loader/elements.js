import styled, { keyframes } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const bouncedelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`

export const Bounce = styled.div`
  animation: ${bouncedelay} 1.4s infinite ease-in-out both;
  background-color: black;
  border-radius: 100%;
  display: inline-block;
  height: 14px;
  width: 14px;

  ${breakpoint('desktop')`
    height: 16px;
    width: 16px;
  `}

  :not(:last-child) {
    margin-right: 4px;
  }
`

export const Container = styled.div`
  text-align: center;
  width: 70px;

  > ${Bounce}:nth-child(1) {
    animation-delay: -0.32s;
  }

  > ${Bounce}:nth-child(2) {
    animation-delay: -0.16s;
  }
`
