import React from 'react'

const Col = ({
  xs,
  sm,
  md,
  lg,
  xl,
  hidden_xs,
  hidden_sm,
  hidden_md,
  hidden_lg,
  hidden_xl,
  offset,
  children
  }) => {
  let classNames = []

  if (xs) classNames.push(`col-xs-${xs}`)
  if (sm) classNames.push(`col-sm-${sm}`)
  if (md) classNames.push(`col-md-${md}`)
  if (lg) classNames.push(`col-lg-${lg}`)
  if (xl) classNames.push(`col-xl-${xl}`)

  if (offset) {
    for (const key in offset) {
      if (!offset.hasOwnProperty(key)) continue
      classNames.push(`col-${key}-offset-${offset[key]}`)
    }
  }

  if (!classNames.length) classNames.push('col-xs-12')

  if (hidden_xs) classNames.push(`hidden-xs`)
  if (hidden_sm) classNames.push(`hidden-sm`)
  if (hidden_md) classNames.push(`hidden-md`)
  if (hidden_lg) classNames.push(`hidden-lg`)
  if (hidden_xl) classNames.push(`hidden-xl`)

  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  )
}

export default Col
