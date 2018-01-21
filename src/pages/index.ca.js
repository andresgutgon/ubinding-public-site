import React from 'react'

import Home from '../components/Home'

export default ({ data }) => <Home data={data} />

export const query = graphql`
  query IndexQueryCa {
    allDatoCmsWork(filter: {locale: {eq: "ca"}}, sort: { fields: [position], order: ASC }) {
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
