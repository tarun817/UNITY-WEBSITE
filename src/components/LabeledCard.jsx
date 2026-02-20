import React from 'react'

const cx = (...parts) => parts.filter(Boolean).join(' ')
const isString = (v) => typeof v === 'string'

/**
 * Reusable “label + content” card shell.
 * Keeps styling fully controlled by passed classNames so existing designs don't change.
 */
const LabeledCard = ({
  className,
  withShadow = false,
  label,
  labelClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  children
}) => {
  return (
    <div className={cx(className, withShadow ? 'shadowDiv position-relative' : '')}>
      {label ? <div className={labelClassName}>{label}</div> : null}
      {title
        ? (isString(title)
          ? <h4 className={titleClassName}>{title}</h4>
          : <div className={titleClassName}>{title}</div>)
        : null}
      {description
        ? (isString(description)
          ? <p className={descriptionClassName}>{description}</p>
          : <div className={descriptionClassName}>{description}</div>)
        : null}
      {children}
    </div>
  )
}

export default LabeledCard

