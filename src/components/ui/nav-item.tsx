import {Link} from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
}

export function NavItem({ label, href, className }: NavItemProps) {
  return (
    <Link
      to={href}
      className={cn("flex cursor-pointer items-center text-sm font-semibold", className)}
    >
      {label}
    </Link>
  );
}
