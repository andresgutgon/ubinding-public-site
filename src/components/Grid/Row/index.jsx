// @flow
import * as React from 'react';

type Props = {
  children: React.Node
}

const Row = ({ children }: Props) => (
  <div className='row'>{children}</div>
)

export default Row
