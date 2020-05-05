import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import FormPage from '../FormPage/FormPage';
import eye from '../../img/eye.svg';
import activeEye from '../../img/active-eye.svg';
import './RegisterForm.scss';

const RegisterForm = ({ modal, setModal, setAuthModal }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [blocked, setBlocked] = useState(true);
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onChange = ({ id, value }) => {
    if (id === 'name') {
      setName(value);
    } else if (id === 'surname') {
      setSurname(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
    check();
  };

  const check = () => {
    if (
      name === '' ||
      surname === '' ||
      !new RegExp(emailRegex).test(email) ||
      password.length < 6
    ) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  };

  const onSubmit = () => {
    if (blocked) return null;

    const obj = {
      name,
      surname,
      email,
      password,
    };
    fetch('http://localhost:8000/api/register', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(obj),
    })
      .then((res) => console.log(res))
      .then((data) => {
        setModal(false);
        setTimeout(() => {
          scroll.scrollTo(0, { smooth: true });
        }, 1000);
        setTimeout(() => {
          setAuthModal(true);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FormPage modal={modal} setModal={setModal}>
      <h1>Регистрация</h1>
      <h3>Заполните поля</h3>
      <div className="form-group">
        <input
          type="text"
          onChange={(e) => onChange(e.target)}
          value={name}
          id="name"
          className="form-control"
        />
        <label
          htmlFor="name"
          className={
            name === ''
              ? 'form-control-placeholder-off'
              : 'form-control-placeholder-on'
          }
        >
          Имя
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={(e) => onChange(e.target)}
          value={surname}
          type="text"
          id="surname"
          className="form-control"
        />
        <label
          htmlFor="surname"
          className={
            surname === ''
              ? 'form-control-placeholder-off'
              : 'form-control-placeholder-on'
          }
        >
          Фамилия
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={(e) => onChange(e.target)}
          value={email}
          type="email"
          id="email"
          className="form-control"
        />
        <label
          htmlFor="email"
          className={
            email === ''
              ? 'form-control-placeholder-off'
              : 'form-control-placeholder-on'
          }
        >
          Почта
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={(e) => onChange(e.target)}
          value={password}
          type={showPass ? 'text' : 'password'}
          id="password"
          className="form-control"
        />
        <img
          onClick={() => setShowPass(!showPass)}
          src={showPass ? activeEye : eye}
          alt="eye"
        />
        <label
          htmlFor="password"
          className={
            password === ''
              ? 'form-control-placeholder-off'
              : 'form-control-placeholder-on'
          }
        >
          Пароль
        </label>
      </div>
      <button
        onClick={onSubmit}
        className={
          blocked ? 'blocked register-button' : 'active register-button'
        }
      >
        <h4>ЗАРЕГИСТРИРОВАТЬСЯ</h4>
      </button>
    </FormPage>
  );
};

export default RegisterForm;
