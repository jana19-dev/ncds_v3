import styled from 'styled-components'

export default styled.div`
  @media (${props => props.theme.device.mobile}) {
    display: ${props => props.mobile ? 'inherit' : 'none'}
  }
  @media (${props => props.theme.device.desktop}) {
    display: ${props => props.desktop ? 'inherit' : 'none'}
  }
`
