import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'

// Global styles
import './styles/index.scss'

/**
 * React-Intl doesn't support nested JSON objects
 * we need to flatten before pass to provider.
 * This is the recomended way: 
 * https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
 *
 * THIS IS SHIT
 * I will try Intl in this project. But this is very disapointing
 */
function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      messages[prefixedKey] = value
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

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
    <IntlProvider locale={langKey} messages={flattenMessages(i18nMessages)}>
      <div>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
        />
        {children()}
      </div>
    </IntlProvider>
  )
}
