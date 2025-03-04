import clsx from 'clsx'
import React, {forwardRef, useCallback, type Ref, ReactElement} from 'react'
import {ExpandableArrow} from '../ExpandableArrow'
import {Text} from '../Text'
import '@primer/brand-primitives/lib/design-tokens/css/tokens/functional/components/button/colors-with-modes.css'
import type {BaseProps} from '../component-helpers'
import styles from './Button.module.css'

export const ButtonVariants = ['primary', 'secondary', 'subtle'] as const
export const ButtonSizes = ['medium', 'large'] as const

export const defaultButtonVariant = ButtonVariants[1]
export const defaultButtonSize = ButtonSizes[0]

export type ButtonBaseProps = {
  /**
   * The leading visual appears before the button content
   */
  leadingVisual?: ReactElement
  /**
   * The trailing visual appears after the button content
   */
  trailingVisual?: ReactElement
  /**
   * The styling variations available in Button
   */
  variant?: typeof ButtonVariants[number]
  /**
   * The size variations available in Button
   */
  size?: typeof ButtonSizes[number]
  /**
   * A flag to show/hide the arrow icon
   */
  hasArrow?: boolean
}

export type ButtonProps<C extends React.ElementType> = BaseProps<C> & {
  as?: C
} & ButtonBaseProps &
  React.ComponentPropsWithoutRef<C>

const testIds = {
  root: 'Button',
  get leadingVisual() {
    return `${this.root}-leading-visual`
  },
  get trailingVisual() {
    return `${this.root}-trailing-visual`
  },
  get expandableArrow() {
    return `${this.root}-expandable-arrow`
  }
}

export const _Button = forwardRef(
  <C extends React.ElementType>(
    {
      as,
      variant = defaultButtonVariant,
      size = defaultButtonSize,
      hasArrow = true,
      className,
      children,
      disabled,
      'aria-disabled': ariaDisabled,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      leadingVisual: LeadingVisual,
      trailingVisual: TrailingVisual,
      ...props
    }: ButtonProps<C>,
    ref: Ref<HTMLButtonElement>
  ) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)
    const Component = as || 'button'
    const isDisabled =
      disabled || ariaDisabled === 'true' || (typeof ariaDisabled === 'boolean' && ariaDisabled === true)

    const returnValidComponent = useCallback((component?: ReactElement) => {
      if (React.isValidElement(component)) {
        return component
      }

      if (typeof component === 'function') {
        return React.createElement(component)
      }
    }, [])

    const LeadingVisualComponent = returnValidComponent(LeadingVisual)
    const TrailingVisualComponent = returnValidComponent(TrailingVisual)

    const handleOnMouseEnter = useCallback(
      event => {
        if (!isDisabled) {
          setIsHovered(true)
          onMouseEnter?.(event)
        }
      },
      [isDisabled, onMouseEnter]
    )

    const handleOnMouseLeave = useCallback(
      event => {
        if (!isDisabled) {
          setIsHovered(false)
          onMouseLeave?.(event)
        }
      },
      [isDisabled, onMouseLeave]
    )

    const handleOnFocus = useCallback(
      event => {
        if (!isDisabled) {
          setIsFocused(true)
          onFocus?.(event)
        }
      },
      [isDisabled, onFocus]
    )

    const handleOnBlur = useCallback(
      event => {
        if (!isDisabled) {
          setIsFocused(false)
          onBlur?.(event)
        }
      },
      [isDisabled, onBlur]
    )

    return (
      <Component
        ref={ref}
        className={clsx(
          styles.Button,
          styles[`Button--${variant}`],
          styles[`Button--size-${size}`],
          isDisabled && styles[`Button--disabled`],
          className
        )}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        disabled={disabled}
        aria-disabled={ariaDisabled}
        {...props}
      >
        {LeadingVisualComponent && (
          <span className={styles['Button__leading-visual']} data-testid={testIds.leadingVisual}>
            {React.cloneElement(LeadingVisualComponent, {
              className: clsx(styles['Button__icon-visual'], isDisabled && styles['Button__icon-visual--disabled']),
              ['aria-hidden']: 'true',
              focusable: 'false'
            })}
          </span>
        )}

        <span className={styles['Button__text']}>
          <Text
            as="span"
            size={size === 'medium' ? '300' : '400'}
            className={clsx(
              styles['Button--label'],
              styles[`Button--label-${variant}`],
              isDisabled && styles[`Button-label--disabled`]
            )}
          >
            {children}
          </Text>
        </span>

        {!TrailingVisual && hasArrow && (
          <span className={clsx(styles['Button__trailing-visual'], styles['Button__trailing-visual--arrow'])}>
            <ExpandableArrow
              hidden
              className={clsx(styles['Button-arrow'], isDisabled && styles[`Button-arrow--disabled`])}
              expanded={!isDisabled && (isHovered || isFocused)}
              data-testid={testIds.expandableArrow}
            />
          </span>
        )}
        {TrailingVisualComponent && (
          <span className={clsx(styles['Button__trailing-visual'])} data-testid={testIds.trailingVisual}>
            {React.cloneElement(TrailingVisualComponent, {
              className: clsx(styles['Button__icon-visual'], isDisabled && styles['Button__icon-visual--disabled']),
              ['aria-hidden']: 'true',
              focusable: 'false'
            })}
          </span>
        )}
      </Component>
    )
  }
)

export const Button = Object.assign(_Button, {testIds})
