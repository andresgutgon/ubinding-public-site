import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import es from 'react-intl/locale-data/es'

import messages from '../data/messages/es'
import Layout from '../components/Layout'

addLocaleData(es)

export default (props) => {
  if (!global.Intl) {
    require.ensure([
      'intl',
      'intl/locale-data/jsonp/es.js'
    ], function (require) {
      require('intl')
      require('intl/locale-data/jsonp/es.js')
      return (<Layout {...props} i18nMessages={messages} />)
    });
  } else {
    return (<Layout {...props} i18nMessages={messages} />)
  }
}

export const query = graphql`
  query LayoutEsQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    datoCmsSite {
      globalSeo {
        siteName
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      copyright
    }
    allDatoCmsSocialProfile(filter: {locale: { eq: "es" } }, sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
        }
      }
    }
  }
`
