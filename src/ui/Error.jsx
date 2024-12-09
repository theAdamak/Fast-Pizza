import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.massage}</p>

      <LinkButton>&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
