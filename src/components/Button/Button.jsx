// import { Component } from "react";
import PropTypes from "prop-types";
import React from 'react';

export default function Button({onClick}) {
    const handleClick = () => {
        onClick();
    }
    return(
        <button type="button" className="Button" onClick={handleClick}>Load more</button>
    )
}



// export class Button extends Component{
//     handleClick = () => {
//         this.props.onClick();
//     }
//     render(){
//         return(
//             <button type="button" className="Button" onClick={this.handleClick}>Load more</button>
//         )
//     }
// }

Button.propTypes = {
    onClick: PropTypes.func
}

