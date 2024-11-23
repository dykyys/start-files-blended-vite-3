import { Link, useLocation } from 'react-router-dom';
import s from './GoBackBtn.module.css';
import { useRef } from 'react';

export const GoBackBtn = () => {
  const location = useLocation();
  const backLink = useRef(location.state ?? '/');
  console.log(location);

  return (
    <Link to={backLink.current} className={s.link}>
      Go Back 👍
    </Link>
  );
};
