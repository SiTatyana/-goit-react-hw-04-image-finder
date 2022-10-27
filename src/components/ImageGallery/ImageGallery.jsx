// import { Component } from "react";
import PropTypes from "prop-types"
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import React from 'react';

export default function ImageGallery({modalOpen, images}) {
    return(
        <>
            <ul className="ImageGallery">
                {images.map((item, id) => 
                <ImageGalleryItem 
                    onClick={modalOpen}
                    src={item.webformatURL} 
                    alt={item.index}
                    largeImage={item.largeImageURL}
                    key={id}
                />)}
            </ul>
        </>
    )
}

// export class ImageGallery extends Component{        
//     render(){
//         return(
//             <>
//                 <ul className="ImageGallery">
//                     {this.props.images.map((item, id) => 
//                     <ImageGalleryItem 
//                         onClick={this.props.modalOpen}
//                         src={item.webformatURL} 
//                         alt={item.index}
//                         largeImage={item.largeImageURL}
//                         key={id}
//                     />)}
//                 </ul>
//             </>
//         )
//     }
// }

ImageGallery.propTypes = {
    modalOpen: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.shape({
        webformatURL: PropTypes.string,
        id: PropTypes.number,
        largeImage: PropTypes.string
    }))
}
