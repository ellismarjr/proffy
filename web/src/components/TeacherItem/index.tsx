import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/38083569?s=460&u=643b3553e2e196e4178f0631c2020862c7f3c833&v=4" alt="Ellismar Júnior" />
        <div>
          <strong>Ellismar Júnior</strong>
          <span>Física Nuclear</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de física nuclear avançada. Apaixonado por explodir coisas.
            <br /> <br />
            Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;