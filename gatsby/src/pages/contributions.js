import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/_styled/common/Card'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, 325px);
  justify-content: center;
  text-align: center;
`

const ContributionsPage = ({ data }) => {
  const { edges: contributions } = data.allSanityContribution

  return (
    <Layout title='அபிவிருத்திகள்'>
      <Wrapper>
        {contributions.map(({ node }) =>
          <Card key={node._id} to={`/contributions/${node.slug.current}`}>
            <h3>{node.title}</h3>
            <img src={node.images[0].asset.fixed.src} alt={node.title} />
            <p>{node.date}</p>
          </Card>
        )}
      </Wrapper>
    </Layout>
  )
}

export default ContributionsPage

export const query = graphql`
  query AllContributions {
    allSanityContribution(
      sort: {
        fields: [date]
        order: DESC
      }
    ) {
      edges {
        node {
          _id,
          slug {
            current
          },
          title,
          date (formatString: "MMMM Do, YYYY"),
          images {
            asset {
              fixed(width: 325, height: 250) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`
