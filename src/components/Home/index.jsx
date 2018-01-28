import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Layout from 'components/Layout'

import styles from './index.module.scss'

export default ({ data }) => (
  <Layout>
    <div className={styles.home}>
      <Img sizes={data.datoCmsHome.image.sizes} />
    </div>
  </Layout>
)
