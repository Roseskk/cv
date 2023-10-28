import React, {MouseEventHandler} from 'react';

interface IButton {
    text: string;
    margin: string;
    padding: string;
    color: string;
    align: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Partial<IButton>> = ({
                                                text,
                                                margin,
                                                padding,
                                                color,
                                                align,
                                                handleClick = () => {},
}) => {
    return(
        <button
            onClick={handleClick}
            style={{marginTop: margin ? margin : '20px',
                padding: padding ? padding : '10px 0 10px 0',
                color: color ? color : 'white',
                alignSelf: align ? align: 'unset'
        }}
            className={'btn'}
        >{text}</button>
    )
}

export default Button;