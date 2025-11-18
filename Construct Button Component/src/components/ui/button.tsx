import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";

    // Base styles using design system tokens
    const baseStyles = "inline-flex items-center justify-center gap-[var(--spacing-200)] rounded-[var(--radius-button)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mds-color-border-action_1)] focus-visible:ring-offset-2";

    // Variant styles using design system tokens
    const variantStyles = {
      primary: "bg-[var(--mds-color-surface-action-primary_1)] text-[var(--mds-color-content-primary_1)] hover:opacity-90 active:opacity-80",
      secondary: "bg-[var(--mds-color-surface-action-secondary_1)] text-[var(--mds-color-content-on-contrast_1)] hover:opacity-90 active:opacity-80",
      outline: "bg-transparent border-2 border-[var(--mds-color-border-default_1)] text-[var(--mds-color-content-primary_1)] hover:bg-[var(--mds-color-surface-secondary_1)] active:bg-[var(--mds-color-surface-tertiary_1)]"
    };

    // Size styles using design system spacing tokens
    const sizeStyles = {
      sm: "h-[32px] px-[var(--spacing-300)] py-[var(--spacing-100)]",
      md: "h-[40px] px-[var(--spacing-400)] py-[var(--spacing-200)]",
      lg: "h-[48px] px-[var(--spacing-500)] py-[var(--spacing-300)]"
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (asChild) {
      return <span className={combinedClassName} {...(props as any)} />;
    }

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
