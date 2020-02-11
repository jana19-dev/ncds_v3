import React from 'react'

import Layout from '../components/layout'
import ImageGrid from '../components/_styled/common/ImageGrid'

export default ({ pageContext: contribution }) => {
  const {
    title,
    date,
    description,
    images
  } = contribution

  return (
    <Layout title='அபிவிருத்திகள்'>
      <h2>{title} | {date}</h2>
      {description && <p>{description}</p>}
      <ImageGrid count={images.length}>
        {images.map((img, idx) =>
          <img
            key={idx}
            src={img.asset.url}
            alt={`${idx + 1} of ${images.length}`}
          />
        )}
      </ImageGrid>
    </Layout>
  )
}
