import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Bienvenidos a la página de reseñas de países</h1>
        <p className={styles.description}>Explora nuestras reseñas y descubre todo lo que necesitas saber sobre diferentes países alrededor del mundo. Desde sus principales atracciones turísticas, hasta sus platos típicos y tradiciones. ¡Conviértete en un experto en viajes con nosotros!</p>
        <Link to='/home' className={styles.ctaButton}>Comenzar a explorar</Link>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Todos los derechos reservados © 2023</p>
      </footer>
    </div>
  );
};

export default LandingPage;
