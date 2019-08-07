import React from 'react'

class ImageSlider extends React.Component {
   constructor() {
       super()
       this.state = {
           currentSlideIndex: 0
       }
   } 


    render() {
        return(
            <div className="image-slider">
                <h5>I am on slide {this.state.currentSlideIndex}</h5>
            </div>
        )   
    }
}

export default ImageSlider;
