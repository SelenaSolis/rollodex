import React from 'react';

function MoreInfo(props){
    return(
        <div className = "person">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
        </div>
    )
}

export default MoreInfo