import { Link, useLocation, useNavigate } from "react-router-dom";
import css from './GoBackBtn.module.css'
import { useRef } from "react";


export const GoBackBtn = () => {
  const location = useLocation();
  const backLink = useRef(location.state??'/')
  return (
    <Link className={ css.link} to={backLink.current}>Go back</Link>
  );
};
export const GoBackBtn2 = () => {  
  const location = useLocation();
  const backLink = useRef(location.state??'/')
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(backLink.current)
  }
  return (
    <button className={ css.link} onClick={handleClick}>Go back 2</button>
  );
};