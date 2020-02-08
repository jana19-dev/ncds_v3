import styled from 'styled-components'

export default styled.footer`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  background: #333333;
  justify-items: center;
  .gatsby-image-wrapper {
    width: 500px;
  }
  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: 1fr;
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`
