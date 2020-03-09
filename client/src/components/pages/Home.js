import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import ProductContext from "../../context/Product/productContext";
import ProductItem from "../../components/products/ProductItems";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Home = (props) => {
    const productContext = useContext(ProductContext);
    const {getLatestProducts, latestProducts, getProducts} = productContext;

    useEffect(() => {
      getLatestProducts();
    }, []);
    

    return (
        <Fragment>
            <div id="showcase">
            <div className="showcase-content">
                <h1 className="l-heading">Welcome to SMD Store</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio sapiente officia modi fuga, saepe voluptates ad odit? Laboriosam placeat dolor aut voluptates non, natus est. Perferendis repudiandae odio magnam neque?</p>
                <Link className="btn btn-inline btn-primary" to="/store">Visit Store</Link>
            </div>
        </div>
        <div id="latest" className="py-2">
            <div className="content py-2">
                <h2 className="m-lead">Latest Products</h2>
            </div>
            <div className="container">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1800}
                keyBoardControl={true}
                customTransition="all .8"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-50-px"
                >
                    {latestProducts.map(product => <ProductItem key={product._id} product={product}/>)} 
</Carousel>
</div>   
        </div>
        </Fragment>
    )
}

export default Home;
