import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal } from 'react-responsive-modal';
import RegisterPage from '../../router/RegisterPage/RegisterPage';
import AuthPage from '../../router/AuthPage/AuthPage';

import 'react-responsive-modal/styles.css';
import './Header.scss';
import logo_img from '../../img/Subtract.svg';
import auth_img from '../../img/Auth.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const {
    registerModal,
    setRegisterModal,
    authModal,
    setAuthModal,
  } = useContext(ModalContext);

  return (
    <div name="header" className="header">
      <Modal
        classNames={{ modal: 'modal-class' }}
        open={registerModal}
        onClose={() => setRegisterModal(false)}
        center
      >
        <RegisterPage
          modal={registerModal}
          setAuthModal={setAuthModal}
          setModal={setRegisterModal}
        />
      </Modal>
      <Modal
        classNames={{ modal: 'modal-class' }}
        open={authModal}
        onClose={() => setAuthModal(false)}
        center
      >
        <AuthPage
          modal={authModal}
          setRegisterModal={setRegisterModal}
          setModal={setAuthModal}
        />
      </Modal>
      <div className="logo-block">
        <img src={logo_img} alt="" />
        <h4>Helpers</h4>
      </div>
      <div className="menu">
        <div
          className={
            window.location.pathname === '/'
              ? 'menu-item selected'
              : 'menu-item'
          }
        >
          <Link to="/">
            <h4 className="menu-text">Главная</h4>
          </Link>
        </div>
        <div
          className={
            window.location.pathname === '/projects'
              ? 'menu-item selected'
              : 'menu-item'
          }
        >
          <Link to="/projects">
            <h4 className="menu-text">Проекты</h4>
          </Link>
        </div>
        <div
          className={
            window.location.pathname === '/calendar'
              ? 'menu-item selected'
              : 'menu-item'
          }
        >
          <Link to="/calendar">
            <h4 className="menu-text">Календарь</h4>
          </Link>
        </div>
        <div
          className={
            window.location.pathname === '/contacts'
              ? 'menu-item selected'
              : 'menu-item'
          }
        >
          <Link to="/contacts">
            <h4 className="menu-text">Контакты</h4>
          </Link>
        </div>
      </div>
      <div className="header-right-block">
        <button onClick={() => setRegisterModal(true)} className="gradient-btn">
          <h4>Стать Волонтером</h4>
        </button>
        <img onClick={() => setAuthModal(true)} src={auth_img} alt="" />
        <div className="language-block">
          <h4>Укр</h4>
          <h4>Рус</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
