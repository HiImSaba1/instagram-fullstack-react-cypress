import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export default function IsUserLoggedIn({ user, isLoggedInPath, children }) {
  if (!user) {
    return children;
  }

  if (user) {
    return <Navigate to={isLoggedInPath} />;
  }
  return null;
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  isLoggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
