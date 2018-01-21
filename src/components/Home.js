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
export default ({ data }) => (
  <Masonry className="showcase">
    {data.allDatoCmsWork.edges.map(({ node: work }) => (
      <div key={work.id} className="showcase__item">
        <Card work={work} />
      </div>
    ))}
  </Masonry>
)
