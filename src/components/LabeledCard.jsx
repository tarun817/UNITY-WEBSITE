import React from 'react'

const cx = (...parts) => parts.filter(Boolean).join(' ')
const isString = (v) => typeof v === 'string'

const LabeledCard = ({
  icon: IconComponent,
  iconSize = 24,
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
      {IconComponent ? (
        <div className="labeled-card-icon">
          {React.isValidElement(IconComponent)
            ? React.cloneElement(IconComponent, {
              size: iconSize,
              color: '#1a5395',
              strokeWidth: 2,
              style: { display: 'block', width: `${iconSize}px`, height: `${iconSize}px` }
            })
            : React.createElement(IconComponent, {
              size: iconSize,
              color: '#1a5395',
              strokeWidth: 2,
              style: { display: 'block', width: `${iconSize}px`, height: `${iconSize}px` }
            })}
        </div>
      ) : null}
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

