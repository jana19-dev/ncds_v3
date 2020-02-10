import styled from 'styled-components'

export default styled.div`
  @media (max-width: 768px) {
    display: ${props => props.mobile ? 'inherit' : 'none'}
  }
  @media (min-width: 769px) {
    display: ${props => props.desktop ? 'inherit' : 'none'}
  }
`
