import React from 'react';

interface IDivider {
    margin: string
}

const Divider: React.FC<Partial<IDivider>> = ({margin}) => {
    return(
        <div style={{marginTop: margin ? margin : '0px'}} className={'divider'}></div>
    )
}

export default Divider;