import { table } from 'console';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SelectProductImage } from '@/app/lib/definitions';

// import * as React from 'react';
// import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';
// interface CustomLeftArrowProps extends ArrowProps {
//   myOwnStuff: string;
// }
// interface CarouselButtonGroupProps extends ButtonGroupProps {
//   className?: string;
// }
// const CustomLeftArrow = ({ onClick }:CustomLeftArrowProps) => {
//   return <div onClick={() => onClick()}>This is My custom arrow</div>
// }
// const CarouselButtonGroup = ({ next, previous }:CarouselButtonGroupProps) => {
//   return (
//     <div>
//       <button onClick={() => previous()} />
//       <button onClick={() => next()} />
//     </div>
//   );
// };
// const CustomDots = ({ index, active, onClick, carouselState }:DotProps) => {
//   return <div onClick={() => onClick }>This is a Custom dots</div>
// }




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  }
};

export default function ImgCarousel({ images } { images: SelectProductImage[] }) {
  
  return(
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    keyBoardControl={true}
    customTransition='all .5'
    transitionDuration={500}
    containerClass='carousel-container'
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={this.props.deviceType}
    dotListClass='custom-dot-list-style'
    itemClass='carousel-item-padding-40-px'
    partialVisbile={true}
    >

    </Carousel>
  );
};