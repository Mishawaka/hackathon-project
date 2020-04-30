import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import './Header.scss';
import logo_img from '../../img/Subtract.svg';
import auth_img from '../../img/Auth.svg';
import RegisterPage from '../../router/RegisterPage/RegisterPage';

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="header">
      <Modal
        classNames={{ modal: 'modal-class' }}
        open={modal}
        onClose={() => setModal(false)}
        center
      >
        <RegisterPage modal={modal} setModal={setModal} />
      </Modal>
      <div className="logo-block">
        <img src={logo_img} alt="" />
        <h4>Helpers</h4>
      </div>
      <div className="menu">
        <h4>Главная</h4>
        <h4>Проекты</h4>
        <h4>Календарь</h4>
        <h4>Контакты</h4>
      </div>
      <div className="header-right-block">
        <button className="gradient-btn">
          <ScrollLink
            activeClass="active"
            to="fifth-block"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <h4>Стать Волонтером</h4>
          </ScrollLink>
        </button>
        <img onClick={() => setModal(true)} src={auth_img} alt="" />
        <div className="language-block">
          <h4>Укр</h4>
          <h4>Рус</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
