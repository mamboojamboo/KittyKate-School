import React from 'react';
import { Link } from 'react-router-dom';

import './styles/courses.css';
import productImage from './img/toefl.jpg';

const Courses = () => {
  const userI = null;
  return (
    <div>

      <div class="catalog-slider">
        <div class="slider-text">
          <h2 class="catalog-slider__catalog-h2">Каталог курсов</h2>
        </div>
      </div>

      <div class="catalog-slider__catalog">

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

        <div class="catalog-slider__product">
          <Link to="#" class="catalog-slider__product-a">
            <img class="catalog-slider__img-catalog" src={productImage} alt=''/><br/>
            <h3 class="catalog-slider__product-h3">Подготовка к сдаче TOEFL</h3>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Courses;
