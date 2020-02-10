import styled from 'styled-components'

const calcColumnCount = (total, minus = 0) => {
  let value = 1
  if (total / 6 < 1.5) {
    if (total / 5 < 1.5) {
      if (total / 4 < 1.5) {
        if (total / 3 < 1.5) {
          value = 1
        } else {
          value = 2
        }
      } else {
        value = 3
      }
    } else {
      value = 4
    }
  } else {
    value = 5
  }
  return value + minus < 1 ? 1 : value + minus
}

export default styled.div`
  line-height: 0;
  column-count: ${props => calcColumnCount(props.count)};
  column-gap: 0px;
  img {
    width: 95% !important;
    margin-bottom: 5%;
    height: auto !important;
  }
  @media (max-width: 1200px) {
    column-count: ${props => calcColumnCount(props.count, -1)};
  }
  @media (max-width: 1000px) {
    column-count: ${props => calcColumnCount(props.count, -2)};
  }
  @media (max-width: 800px) {
    column-count: ${props => calcColumnCount(props.count, -3)};
  }
  @media (max-width: 600px) {
    column-count: ${props => calcColumnCount(props.count, -4)};
  }
`
