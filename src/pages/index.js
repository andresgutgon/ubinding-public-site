import React from 'react'
import Link from 'gatsby-link'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'

const Card = ({ work }) => {
  const { slug, locale, coverImage, title, excerpt } = work
  const localizedPath = locale == 'es' ? 'trabajos' : 'treballs'
  return (
    <figure className="card">
      <Link to={`/${locale}/${localizedPath}/${work.slug}`} className="card__image">
        <Img sizes={coverImage.sizes} />
      </Link>
      <figcaption className="card__caption">
        <h6 className="card__title">
          <Link to={`/works/${work.slug}`}>{work.title}</Link>
        </h6>
        <div className="card__description">
          <p>{excerpt}</p>
        </div>
      </figcaption>
    </figure>
  )
}
const IndexPage = ({ data }) => (
  <Masonry className="showcase">
    {data.allDatoCmsWork.edges.map(({ node: work }) => (
      <div key={work.id} className="showcase__item">
        <Card work={work} />
      </div>
    ))}
  </Masonry>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          locale
          title
          slug
          excerpt
          coverImage {
            sizes(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
