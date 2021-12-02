import React, { useState } from 'react';
import Card from './Card'
function Modal(props) {
    const [show, setShow] = useState(true)

    function hideModal(event) {
        let target = event.target;
        if (target.id == 'modal') {
            setShow(false);
        }
    }
    return (
        <div id="modal" onClick={hideModal} className={show ? "modal" : "modal hideModal"}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div >
    )
}
export default Modal;