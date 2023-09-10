
import classes from '../UI/Modal.module.css'
import { Fragment } from 'react'
import ReactDom from 'react-dom'

const BackDrop = (props) => {
 return <div className={classes.backdrop} onClick={props.closeCart}></div>
}

const ModalOverlay = (props) => {
    //props.children is the attribute inside which actual contenrt will be passed where modal will be used 
return <div>
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
</div>
}

const portalElement =  document.getElementById('overlays')

const Modal =(props) => {
return(

<Fragment>
{ReactDom.createPortal(<BackDrop closeCart = {props.closeCart}/>,portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}


</Fragment>
   

)
}

export default Modal;