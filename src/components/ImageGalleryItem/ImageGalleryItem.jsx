// import { Component } from "react";
import PropTypes from "prop-types";
import React from 'react';

export default function ImageGalleryItem({largeImage, onClick, src,alt}) {
    const handleClick = () => {
        onClick(largeImage);
    }
    return(
        <li className="ImageGalleryItem">
            <img onClick={handleClick} className="ImageGalleryItem-image" src={src} alt={alt}/>
        </li>
    )
}


// export class ImageGalleryItem extends Component{
//     handleClick = () => {
//         this.props.onClick(this.props.largeImage);
//     }
//     render(){
//         const {src, alt} = this.props;
//         return(
//             <li className="ImageGalleryItem">
//                 <img onClick={this.handleClick} className="ImageGalleryItem-image" src={src} alt={alt}/>
//             </li>
//         )
//     }
// }


ImageGalleryItem.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
    largeImage: PropTypes.string
}
