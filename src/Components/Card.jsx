import '../Style/Card.css';
import { Link } from 'react-router-dom';
function Card(props){

    return(
        <div class="card sizes">
            <img src ={props.imageUrl} class="card-img-top" alt="..."/>

            <Link to={`/products/${props.id}`} class="btn btn-info">Details</Link>
            
        </div>
    );
}

export default Card;