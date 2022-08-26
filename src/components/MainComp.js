import Card from './Card'
import './MainComp.css'
import myselfIcon from '../data/myselfIcon.png'
import teamIcon from '../data/teamIcon.png'
import checkIcon from '../data/check.png'

function MainComp(props) {
    return (
        <div className='container'>
            {props.compId === '4' && <div className="check-cont"><img src={checkIcon} alt="check" /></div>}
            <div className='big-head'>{props.head1}</div>
            <div className='small-head'>{props.head2}</div>
            {props.compId === '1' &&
                <div className='form-container'>
                    <label>{props.lab1}</label>
                    <input placeholder="Steve Jobs" type="text"></input>
                    <label>{props.lab2}</label>
                    <input placeholder="Steve" type="text"></input>
                </div>
            }
            {props.compId === '2' &&
                <div className='form-container'>
                    <label>{props.lab1}</label>
                    <input placeholder="Eden" type="text"></input>
                    <label>{props.lab2}{props.compId === '2' && <span>(optional)</span>}</label>
                    <input placeholder="Example" type="text"></input>
                </div>
            }
            {props.compId === '3' &&
                <div className='card-container'>
                    <Card
                        icon={myselfIcon}
                        type={"For myself"}
                        brief={"Write better. Think more clearly. Stay organized."}
                        active={true}
                    />
                    <Card
                        icon={teamIcon}
                        type={"With my team"}
                        brief={"Wikis, docs, tasks & projects, all in one place."}
                        active={false}
                    />
                </div>
            }
        </div>
    )
}

export default MainComp