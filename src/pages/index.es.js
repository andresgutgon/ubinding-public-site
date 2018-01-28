import React from 'react'

import Home from '../components/Home'

export default ({ data }) => <Home data={data} />

export const query = graphql`
  query indexqueryEs {
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
