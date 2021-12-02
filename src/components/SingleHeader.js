import { Link } from "react-router-dom";
import classes from "./SingleHeader.module.css";
const SingleHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo n shit</div>
      <nav>
        <ul className={classes.header}>
          <li className={classes.links}>
            <Link to="/home-page" className={classes.links}>
              {" "}
              Homepage
            </Link>
          </li>
          <li className={classes.links}>
            <Link to="/my-profile" className={classes.links}>
              {" "}
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SingleHeader;
