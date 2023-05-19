import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound(){
    return(
<section className="not__found">
<div className="not__found-box">
<h1 className="not__found-title">404</h1>
    <p className="not__found-text">Страница не найдена</p>
    <Link to="/signup" className="not__found-link">назад</Link>
</div>
</section>
    )
}