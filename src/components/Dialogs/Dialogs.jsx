import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messagesData.map ( message => <Message message={message.message} />);

    let dialogsElements = props.dialogsPage.dialogsData.map ( dialog => <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} />);

    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch( {type: 'UPDATE-NEW-MESSAGE-TEXT', newText:text} );
    }  
  
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }                
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
            <div className={classes.textarea}>
                <textarea ref={ newMessageElement }
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText} />
                <button onClick = { addMessage }>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;