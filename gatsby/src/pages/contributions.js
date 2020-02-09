import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Card from '../components/_common/Card'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, 375px);
  justify-content: center;
  text-align: center;
`

const ContributionsPage = () => (
  <Layout title='அபிவிருத்திகள்'>
    <Wrapper>
      <Card title='Card title here' imageSrc='https://picsum.photos/400/280.jpg' />
      <Card title='Card title here' imageSrc='https://picsum.photos/400/280.jpg' />
      <Card title='Card title here' imageSrc='https://picsum.photos/400/280.jpg' />
    </Wrapper>
  </Layout>
)

export default ContributionsPage
