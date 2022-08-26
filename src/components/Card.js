import './Card.css'

function Card(props) {
    return (
        <div className={props.active ? "card-inner-container activeCard" : "card-inner-container"}>
            <div><img src={props.icon} alt="icon" /></div>
            <div className="type">{props.type}</div>
            <div className="brief">{props.brief}</div>
        </div>
    )
}

export default Card
