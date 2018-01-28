import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'

// Global styles
import './styles/index.scss'

function getLangsMenu(languages, location) {
  const url = location.pathname;
  const { langs, defaultLangKey } = languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  return getLangs(langs, langKey, getUrlForLang(homeLink, url))
}

export default ({ children, data, location, i18nMessages }) => {
  const { languages } = data.site.siteMetadata
  const { langs, defaultLangKey } = languages
  const url = location.pathname
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
        />
        {children()}
      </div>
    </IntlProvider>
  )
}
