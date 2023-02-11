import React from 'react'
import { Carousel } from 'antd';
import CarouselImage from "../../../assets/images/carousel.png"

const contentStyle = {
    width: "100%",
    textAlign: 'center',
};



function carouselCard() {
    return (
        <>
            <div>
                <Carousel autoplay >
                    <div>
                        <img style={contentStyle} src={CarouselImage} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage} alt="..." />
                    </div>

                </Carousel>
            </div>
        </>

    )
}

export default carouselCard