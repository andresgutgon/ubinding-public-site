import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './index.module.scss'

export default ({ data }) => (
  <div className={styles.home}>
    <Img sizes={data.datoCmsHome.image.sizes} />
  </div>
)
