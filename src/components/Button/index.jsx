// @flow
import * as React from 'react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import Link from 'gatsby-link'

import styles from './index.module.scss'
const cx = classNames.bind(styles)

export type ButtonType =
  | 'brand'
  | 'negative'
type Props = {
  children: React.Node,
  collapsed?: boolean,
  disabled?: boolean,
  href?: string,
  label: string | React.Element<any>,
  onClick?: (event: any) => ?Promise<void>,
  outline?: boolean,
  size: 'smaller' | 'small' | 'medium' | 'big',
  submit: boolean,
  to?: string,
  type?: ButtonType,
  rounded?: boolean,
}

type State = {
  clicked: boolean
}

export default class Button extends React.Component<Props, State> {
  mounted: boolean = false
  state = {
    clicked: false
  }

  static defaultProps = {
    disabled: false,
    outline: false,
    size: 'medium',
    submit: false,
    type: 'brand'
  }

  componentDidMount () {
    this.mounted = true
  }

  componentWillUnmount () {
    this.mounted = false
  }

  @autobind
  onClick (event: SyntheticEvent<any>) {
    if (!this.props.onClick) return
    if (this.state.clicked) return

    const result = this.props.onClick(event)

    if (!result) return

    this.setState({ clicked: true }, () => {
      result.then(() => {
        if (this.mounted) this.setState({ clicked: false })
      })
    })
  }

  render () {
    const {
      children,
      collapsed,
      rounded,
      disabled,
      href,
      outline,
      size,
      submit,
      to,
      type,
    } = this.props

    const className = cx(outline ? 'outline' : 'default', type, size, {
      collapsed, rounded, disabled
    })

    if (href) {
      return (
        <a className={className} href={href} tabIndex={disabled ? -1 : ''}>
          {children}
        </a>
      )
    } else if (to) {
      return (
        <Link className={className} to={to}>
          {children}
        </Link>
      )
    }

    return (
      <button
        className={className}
        disabled={disabled}
        onClick={this.onClick}
        type={submit ? 'submit' : 'button'}
      >
        {children}
      </button>
    )
  }
}
