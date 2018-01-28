// @flow
import * as React from 'react';

import styles from './index.module.scss'

type Props = {
  children: React.Node,
  transparent: boolean
}

export default class Layout extends React.Component<Props> {
  render () {
    const { children, transparent } = this.props

    if (transparent) return null

    return (
      <div className={styles.layout}>
        {children}
      </div>
    )
  }
}
