import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <figure className={cn("rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
