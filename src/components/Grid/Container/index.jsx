// @flow
import * as React from 'react';

import styles from './index.module.scss'

type Props = {
  children: React.Node
}

const Container = ({ children }: Props) => (
  <div className={`${styles.wrap} container-fluid`}>{children}</div>
)

export default Container
