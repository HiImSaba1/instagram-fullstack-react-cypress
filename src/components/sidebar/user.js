/* eslint-disable */
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { memo } from "react";

const User = ({ username, fullname }) =>
  !username || !fullname ? (
    <Skeleton count={6} height={80} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt={`This is the gorgeous ${username}`}
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm"> {username}</p>
        <p className="text-sm"> {fullname}</p>
      </div>
    </Link>
  );

export default memo(User);

User.propTypes = {
  username: propTypes.string,
  fullname: propTypes.string,
};

User.whyDidYouRender = true;
