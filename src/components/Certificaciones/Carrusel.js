import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from './Img';
import imagen_1 from '../../assets/nuevaescuelademagnates.jfif'
import imagen_2 from "../../assets/coder.jpg"
import imagen_3 from "../../assets/clubnegocios.jpg"
import imagen_4 from "../../assets/clubpenguin.png"




const Carrusel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
  swipeable={false}
  draggable={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  className='carrusel'
>
          <Img src={imagen_1} alt={"Nueva Universidad de Magnates"} titulo={"E-Commerce"} subtitulo={"Nueva Universidad de Magnates"}/>
            <Img src={imagen_2} alt={"Nueva Universidad de Magnates"} titulo={"E-Commerce"} subtitulo={"Nueva Universidad de Magnates"}/>
            <Img src={imagen_3} alt={"Nueva Universidad de Magnates"} titulo={"E-Commerce"} subtitulo={"Nueva Universidad de Magnates"}/>
            <Img src={imagen_4} alt={"Nueva Universidad de Magnates"} titulo={"E-Commerce"} subtitulo={"Nueva Universidad de Magnates"}/>
</Carousel>
  )
}

export default Carrusel