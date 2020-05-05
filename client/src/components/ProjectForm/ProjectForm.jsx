import React, { useState } from 'react';
import FormPage from '../FormPage/FormPage';

const ProjectPage = ({ modal, setModal }) => {
  const [form, setForm] = useState({
    name: '',
    theme: '',
    descr: '',
    email: '',
    phone: '',
    org: '',
  });

  const fields = [
    { name: 'name', label: 'Название', value: form.name },
    { name: 'theme', label: 'Тематика', value: form.theme },
    { name: 'descr', label: 'Описание', value: form.descr },
    { name: 'email', label: 'Почта', value: form.email },
    { name: 'phone', label: 'Телефон (без +38)', value: form.phone },
    { name: 'org', label: 'Организация', value: form.org },
  ];

  return (
    <FormPage modal={modal} setModal={setModal}>
      <h1>Регистрация проекта</h1>
      <h3>Заполните поля</h3>
      {fields.map((el, id) => (
        <div key={id} className="form-group">
          <input
            onChange={({ target }) =>
              setForm({
                ...form,
                [target.name]: target.value,
              })
            }
            value={el.value}
            type="text"
            name={el.name}
            className="form-control"
          />
          <label
            htmlFor={el.name}
            className={
              el.value === ''
                ? 'form-control-placeholder-off'
                : 'form-control-placeholder-on'
            }
          >
            {el.label}
          </label>
        </div>
      ))}
      <button
        onClick={() => console.log(form)}
        // className={blocked ? 'blocked auth-button' : 'active auth-button'}
      >
        <h4>ВОЙТИ</h4>
      </button>
      <div className="register-invite">
        <p>Новый пользователь?</p>
        <p>Зарегистрироваться</p>
      </div>
    </FormPage>
  );
};

export default ProjectPage;
