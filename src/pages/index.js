import React from 'react'

import Home from '../components/Home'

export default ({ data }) => <Home data={data} />

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
