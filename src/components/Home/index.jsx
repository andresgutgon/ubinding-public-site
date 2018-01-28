import React from 'react'
import autobind from 'autobind-decorator'
import Link from 'gatsby-link'
import classNames from 'classnames/bind'
import { FormattedMessage } from 'react-intl'

import { Container, Row, Col } from 'components/Grid'
import Layout from 'components/Layout'
import Button from 'components/Button'

import styles from './index.module.scss'
const cx = classNames.bind(styles)

type Props = {
  data: Object
}

type State = {
  transparent: boolean,
  hideThumbnail: boolean
}

const HEADER_HEIGHT = 75
export default class Home extends React.Component<Props, State> {
  _jumbotron: React.Node
  state = {
    transparent: true,
    hideThumbnail: false
  }

  @autobind
  handleScroll () {
    const transparent = this._jumbotron.offsetHeight - HEADER_HEIGHT > window.pageYOffset
    if (transparent != this.state.transparent) {
      this.setState({ transparent })
    }
  }

  componentDidMount() {
    window.addEventListener(
      'scroll', this.handleScroll
    )
    this.loadBigImage()
  }

  loadBigImage () {
    const { data } = this.props
    const img = document.createElement('img')
    img.addEventListener('load', () => {
      this.setState({ hideThumbnail: true })
    })
    img.src = data.datoCmsHome.image.url
  }

  componentWillUnmount() {
    window.removeEventListener(
      'scroll', this.handleScroll
    )
  }

  renderThumbnail () {
    const { data } = this.props
    const { hideThumbnail: hide } = this.state
    return (
      <div
        className={cx('thumbnail', { hide })}
        style={{
          backgroundImage: `url(${data.datoCmsHome.image.sizes.base64})`,
        }}
      />
    )
  }

  render () {
    const { data } = this.props
    const { transparent } = this.state
    return (
      <Layout transparent={transparent}>
        <div className={styles.home}>
          <div
            ref={(node) => this._jumbotron = node}
            className={styles.jumbotron}
            style={{ backgroundImage: `url(${data.datoCmsHome.image.url})` }}
          >
            {this.renderThumbnail()}

            <div className={styles.jumbotronContent}>
              <Button
                to='/lol'
                outline
                size='big'
                type='negative'
              >
                <FormattedMessage id='home.cta' />
              </Button>
            </div>
          </div>
        </div>
        <div style={{height: 2000 }} />
      </Layout>
    )
  }
}
