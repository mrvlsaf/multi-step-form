import './MainComp.css'

function MainComp(props) {
    return (
        <div className='container'>
            <div className='big-head'>{props.head1}</div>
            <div className='small-head'>{props.head2}</div>
            <div className='form-container'>
                <label>{props.lab1}</label>
                <input type="text"></input>
                <label>{props.lab2}</label>
                <input type="text"></input>
            </div>
        </div>
    )
}

export default MainComp