import React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';

import { formatPrice } from '../../../utils/propertyHelpers';
import Helmet from 'react-helmet';

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  & .swiper-button-next,
  .swiper-button-prev {
    color: ${props => props.theme.colors.primary};
    @media (max-width: 400px) {
      display: none;
    }
  }
  & .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.primary};
  }
`;

const Property = styled.div`
  margin: 3rem 0;
  text-align: center;
  & img {
    width: 30rem;
    height: 20rem;
    object-fit: cover;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

export const PropertyGallery = ({ properties }) => {
  const params = {
    lazy: true,

    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };

  return (
    <Container>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/css/swiper.min.css"
        ></link>
      </Helmet>
      <Swiper {...params}>
        {properties.map((property, i) => (
          <Property key={i}>
            <img
              className="swiper-lazy"
              src={property.acf.mainimage}
              alt={property.acf.title}
            />
            <h4>
              {formatPrice(property.acf.listedprice, property.acf.currency)}
            </h4>
          </Property>
        ))}
      </Swiper>
    </Container>
  );
};
