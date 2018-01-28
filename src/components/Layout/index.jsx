// @flow
import * as React from 'react';

import styles from './index.module.scss'

type Props = {
  children: React.Node,
  transparent: boolean
}

export default class Layout extends React.Component<Props> {
  render () {
    const { children } = this.props
    return (
      <div className={styles.layout}>
        {children}
      </div>
    )
  }
}
