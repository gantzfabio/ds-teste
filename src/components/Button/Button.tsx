import './Button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
