import { Link } from "wouter";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-8xl font-bold text-primary/20 mb-4">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has moved.</p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
