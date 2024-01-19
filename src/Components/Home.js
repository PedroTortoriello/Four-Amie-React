import React from 'react';
import protetorTela from '../Components/img/Protetor-Tela.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__img">
        <img src={protetorTela} alt="Imagem de Protetor de Tela" />
      </div>
    </section>
  );
};

export default Home;
