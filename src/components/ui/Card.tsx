import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-card rounded-xl border border-border ${className}`} {...props} />;
}

export function CardHeader({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pb-0 ${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`font-semibold ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />;
}
