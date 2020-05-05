import React, { useState, useContext } from 'react';
import FormPage from '../FormPage/FormPage';
import { Modal } from 'react-responsive-modal';

import ImageCrop from '../ImageCrop/ImageCrop';
import { ImageContext } from '../../contexts/ImageContext';

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

  const { croppedImageUrl } = useContext(ImageContext);

  return (
    <FormPage modal={modal} setModal={setModal}>
      <h1>Регистрация проекта</h1>
      <h3>Заполните поля</h3>
      <div className="form-group">
        <ImageCrop />
        <div className="background">
          <img src={croppedImageUrl} alt="" />
        </div>
      </div>
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
        className={'active auth-button'}
      >
        <h4>ВОЙТИ</h4>
      </button>
    </FormPage>
  );
};

export default ProjectPage;
