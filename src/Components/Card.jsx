import '../Style/Card.css'

function Card(props){

    return(
        <div className="card">
            <h1 className="title">{props.title}</h1>
            <img src = {props.imageUrl}/>
            <p className="description">{props.description}</p>
            <p className="price">{props.price}</p>
        </div>
    );

}

export default Card;