// @flow
import * as React from 'react';

type Props = {
  children: React.Node
}

const Container = ({ children }: Props) => (
  <div className='container'>{children}</div>
)

export default Container
