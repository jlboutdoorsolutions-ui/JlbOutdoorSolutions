import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "outline" | "outlineWhite" | "ghost";
type Size = "default" | "lg" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
  outlineWhite: "border border-white text-white bg-transparent hover:bg-white hover:text-foreground",
  ghost: "bg-transparent hover:bg-secondary/60 text-foreground",
};

const sizeClasses: Record<Size, string> = {
  default: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
  sm: "px-4 py-2 text-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
