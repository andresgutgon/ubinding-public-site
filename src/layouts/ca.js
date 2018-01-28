import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'
import ca from 'react-intl/locale-data/ca'

import messages from '../data/messages/ca'
import Provider from '../components/Provider'

addLocaleData(ca)

export default (props) => {
  if (!global.Intl) {
    require.ensure([
      'intl',
      'intl/locale-data/jsonp/en.js'
    ], function (require) {
      require('intl')
      require('intl/locale-data/jsonp/ca.js')
      return (<Provider {...props} i18nMessages={messages} />)
    });
  } else {
    return (<Provider {...props} i18nMessages={messages} />)
  }
}

export const query = graphql`
  query LayoutCaQuery {
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
  }
`
