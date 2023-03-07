import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Activity.module.css';

const Activity = ({ country }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.activity}>
      {country.activities && country.activities.length > 0 ? (
        <div>
          <h3>Actividades</h3>
          <Slider {...settings}>
            {country.activities.map((activity, index) => (
              <div key={index}>
                <h4>Actividad {index + 1}</h4>
                <ul>
                  <li>Nombre: {activity.name}</li>
                  <li>Duración: {activity.duration}</li>
                  <li>Dificultad: {activity.difficulty}</li>
                  <li>Temporada: {activity.season}</li>
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div>No se encontraron actividades.</div>
      )}
    </div>
  );
};

export default Activity;
