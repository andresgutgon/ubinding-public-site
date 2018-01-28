// @flow
import * as React from 'react';
import classNames from 'classnames/bind'

import { Container, Row, Col } from 'components/Grid'

import styles from './index.module.scss'
const cx = classNames.bind(styles)

type Props = {
  transparent: boolean
}

export default class Header extends React.Component<Props> {
  render () {
    const { transparent } = this.props

    return (
      <div className={cx('header', { transparent })}>
        <Container>
          <Row>
            <Col>
              <div className={styles.content}>
                <div className={styles.logo}>
                  <span className={styles.initial}>UB</span>inding
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
