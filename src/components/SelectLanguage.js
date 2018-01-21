import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

const LanguageLink = ({ lang }) => {
  const content = () => <span>{lang.langKey}</span>

  if (lang.selected) return content()

  return (
    <Link to={lang.link} key={lang.langKey}>
      {content()}
    </Link>
  )
}
const SelectLanguage = (props) => {
  const { langs } = props
  return (
    <div>
      <div><FormattedMessage id="selectLanguage" /></div>
      {props.langs.map(lang =>
        <LanguageLink lang={lang} key={lang.langKey}/>
      )}
    </div>
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array
}

export default SelectLanguage
