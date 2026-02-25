import './button.css';

/**
 * CustomButton — Reusable button component
 * @param {string}   label     — Button text
 * @param {'primary'|'outline'} variant
 * @param {Function} onClick
 * @param {boolean}  fullWidth — Expands to 100% width
 * @param {string}   href      — If provided, renders as anchor tag
 * @param {string}   type      — button type attribute
 */
export default function CustomButton({
  label,
  variant = 'primary',
  onClick,
  fullWidth = false,
  href,
  type = 'button',
  className = '',
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {label}
    </button>
  );
}
