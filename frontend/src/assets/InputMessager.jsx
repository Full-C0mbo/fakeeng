import '../stylesheets/InputMessager.css';
import PropTypes from 'prop-types';

function InputMessager(
    { isActive = false, type = -1, reasoning = 0, buttonPressed = -1 }
) {
    const placeholder = "https://placehold.co/100x100";

    const messageType = () => {
        switch(type) {
            case 0:
                return "valid";
            case 1:
                return "invalid";
            default:
                return "blank";
        }
    }

    if (!isActive) {
        return(<></>);
    }

    return (
        <>
            <div className={`message-box ${messageType()}`}>
                <div className='message-wrapper'>
                    <img className='message-avatar' src={placeholder}/>
                    <p className={`message-reason ${messageType()}`}>Reasoning</p>
                    <p className='message-text'>{`""`}</p>
                </div>
            </div>
        </>
    );
}

InputMessager.PropTypes = {
    isActive: PropTypes.bool.isRequired,
    type: PropTypes.number.isRequired,
    reasoning: PropTypes.number.isRequired,
    buttonPressed: PropTypes.number.isRequired
}

export default InputMessager;