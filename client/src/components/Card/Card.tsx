import Modal from "../modal/Modal"
import { useState } from 'react'




const Card = ({ flash }):JSX.Element => {
    const [modalActive, setModalActive] = useState(true)

    const onHandleClick = ():void => {


    }

    return (
        <div key={flash.id} className='Card' onClick={() => setModalActive(true)}>
    
            { (flash.opened === false) ? 
            (
                <div className='closed-card' onClick={onHandleClick}>{flash.score}</div>
            ) : (
                <Modal active={modalActive} setActive={setModalActive} />
             ) 
            }
           
        </div>
    )
};

export default Card;