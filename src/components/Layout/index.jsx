// @flow
import * as React from 'react';

import Header from 'components/Header'

type Props = {
  children: React.Node,
  transparent: boolean
}

export default class Layout extends React.Component<Props> {
  render () {
    const { children, transparent } = this.props
    return (
      <div>
        <Header transparent={transparent} />
        {children}
      </div>
    )
  }
}
