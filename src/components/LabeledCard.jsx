import { GraduationCap } from 'lucide-react'
import React from 'react'

const cx = (...parts) => parts.filter(Boolean).join(' ')
const isString = (v) => typeof v === 'string'

/**
 * Reusable “label + content” card shell.
 * Keeps styling fully controlled by passed classNames so existing designs don't change.
 */
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

console.log(typeof IconComponent, 'IconComponent');

  return (
    <div className={cx(className, withShadow ? 'shadowDiv position-relative' : '')}>
      {IconComponent && typeof IconComponent === 'object' && (
        // <IconComponent />
        <div className="labeled-card-icon">
          {React.createElement(IconComponent, {
            size: iconSize,
            color: '#1a5395',
            strokeWidth: 2,
            style: { display: 'block', width: `${iconSize}px`, height: `${iconSize}px` }
          })}
        </div>
      )}
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

