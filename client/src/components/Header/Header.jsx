import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal } from 'react-responsive-modal';
import RegisterPage from '../../router/RegisterPage/RegisterPage';
import AuthPage from '../../router/AuthPage/AuthPage';

import 'react-responsive-modal/styles.css';
import './Header.scss';
import logo_img from '../../img/Subtract.svg';
import auth_img from '../../img/Auth.svg';

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
        <h4>Главная</h4>
        <h4>Проекты</h4>
        <h4>Календарь</h4>
        <h4>Контакты</h4>
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
