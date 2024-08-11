import { HTMLAttributes } from "react";

export type LinkButtonProps = {
  external?: boolean;
  href: string;
} & HTMLAttributes<HTMLAnchorElement>;
