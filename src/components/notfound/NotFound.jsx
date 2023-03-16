import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound(){
    return(
<section className="not__found">

    <h1 className="not__found-title">404</h1>
    <p className="not__found-text">Страница не найдена</p>
    <Link to="/sign-up" className="not__found-link">назад</Link>

    
</section>
    )
}