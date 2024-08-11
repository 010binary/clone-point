import { Link } from "react-router-dom";
import { LinkButtonProps } from "./LinkButton.types";

export default function LinkButton({
  href,
  children,
  ...anchorProps
}: LinkButtonProps) {

  return (
    <Link to={href} {...anchorProps}>
      {" "}
      {children}{" "}
    </Link>
  );
}
