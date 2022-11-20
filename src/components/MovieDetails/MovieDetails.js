import classes from './MovieDetailsModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = ({onClose})=> {

    return <div className={classes.backdrop} onClick={onClose}></div>
};

const ModalOverlay = (props)=> {
    
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>);
};

const portalElement = document.getElementById('overlays');

const MovieDetailsModal = (props)=> {

    return (
        <>
           {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default MovieDetailsModal;