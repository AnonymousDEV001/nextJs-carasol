"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'


function Hero() {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
  return (
<div className="intro-section pt-3 pb-3 mb-2">
  <div className="container">
    <div className="row">
        {isClient &&       <div className="col-lg-8">
        <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
          <div
            className="intro-slider owl-carousel owl-simple owl-dark owl-nav-inside"
            data-toggle="owl"
            data-owl-options='{
                                  "nav": false, 
                                  "dots": true,
                                  "responsive": {
                                      "768": {
                                          "nav": true,
                                          "dots": false
                                      }
                                  }
                              }'
          >
            <div className="intro-slide">
              <figure className="slide-image">
                <Image src={'/assets/images/demos/demo-3/slider/slide-1-480w.jpg'} width={200} height={200}/>

              </figure>
              <div className="intro-content">
                <h3 className="intro-subtitle text-primary">Daily Deals</h3>
                <h1 className="intro-title">
                  AirPods <br />
                  Earphones
                </h1>
                <div className="intro-price">
                  <sup>Today:</sup>
                  <span className="text-primary">
                    $247<sup>.99</sup>
                  </span>
                </div>
                <a href="category.html" className="btn btn-primary btn-round">
                  <span>Click Here</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div>
            {/* <div className="intro-slide">
              <figure className="slide-image">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet="assets/images/demos/demo-3/slider/slide-2-480w.jpg"
                  />
                  <img
                    src="assets/images/demos/demo-3/slider/slide-2.jpg"
                    alt="Image Desc"
                  />
                </picture>
              </figure>
              <div className="intro-content">
                <h3 className="intro-subtitle text-primary">
                  Deals and Promotions
                </h3>
                <h1 className="intro-title">
                  Echo Dot <br />
                  3rd Gen
                </h1>
                <div className="intro-price">
                  <sup className="intro-old-price">$49,99</sup>
                  <span className="text-primary">
                    $29<sup>.99</sup>
                  </span>
                </div>
                <a href="category.html" className="btn btn-primary btn-round">
                  <span>Click Here</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div> */}
          </div>
          <span className="slider-loader" />
        </div>
      </div>}

      {/* <div className="col-lg-4">
        <div className="intro-banners">
          <div className="banner mb-lg-1 mb-xl-2">
            <a href="#">
              <img
                src="assets/images/demos/demo-3/banners/banner-1.jpg"
                alt="Banner"
              />
            </a>
            <div className="banner-content">
              <h4 className="banner-subtitle d-lg-none d-xl-block">
                <a href="#">Top Product</a>
              </h4>
              <h3 className="banner-title">
                <a href="#">
                  Edifier <br />
                  Stereo Bluetooth
                </a>
              </h3>
              <a href="#" className="banner-link">
                Shop Now
                <i className="icon-long-arrow-right" />
              </a>
            </div>
          </div>
          <div className="banner mb-lg-1 mb-xl-2">
            <a href="#">
              <img
                src="assets/images/demos/demo-3/banners/banner-2.jpg"
                alt="Banner"
              />
            </a>
            <div className="banner-content">
              <h4 className="banner-subtitle d-lg-none d-xl-block">
                <a href="#">Clearance</a>
              </h4>
              <h3 className="banner-title">
                <a href="#">
                  GoPro - Fusion 360 <span>Save $70</span>
                </a>
              </h3>
              <a href="#" className="banner-link">
                Shop Now
                <i className="icon-long-arrow-right" />
              </a>
            </div>
          </div>
          <div className="banner mb-0">
            <a href="#">
              <img
                src="assets/images/demos/demo-3/banners/banner-3.jpg"
                alt="Banner"
              />
            </a>
            <div className="banner-content">
              <h4 className="banner-subtitle d-lg-none d-xl-block">
                <a href="#">Featured</a>
              </h4>
              <h3 className="banner-title">
                <a href="#">
                  Apple Watch 4 <span>Our Hottest Deals</span>
                </a>
              </h3>
              <a href="#" className="banner-link">
                Shop Now
                <i className="icon-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

  )
}

export default Hero
