import React, { useState, useContext, createRef } from 'react';
import FormPage from '../FormPage/FormPage';

import ImageCrop from '../ImageCrop/ImageCrop';
import { ImageContext } from '../../contexts/ImageContext';

import plus from '../../img/plus.svg';
import facebook from '../../img/facebook.svg';
import inst from '../../img/instagram.svg';
import './ProjectForm.scss';

const ProjectForm = ({ modal, setModal }) => {
  const [form, setForm] = useState({
    name: '',
    theme: '',
    descr: '',
    email: '',
    phone: '',
    org: '',
    facebook: '',
    inst: '',
  });

  const { croppedImageUrl, file } = useContext(ImageContext);

  const clickRef = createRef();

  const fields = [
    { name: 'name', label: 'Название', value: form.name },
    { name: 'theme', label: 'Тематика', value: form.theme },
    { name: 'descr', label: 'Описание', value: form.descr },
    { name: 'email', label: 'Почта', value: form.email },
    { name: 'phone', label: 'Телефон (без +38)', value: form.phone },
    { name: 'org', label: 'Организация', value: form.org },
    { name: 'facebook', label: facebook, value: form.facebook },
    { name: 'inst', label: inst, value: form.inst },
  ];

  const blobToBase64 = function (blob, cb) {
    var reader = new FileReader();
    reader.onload = function () {
      var dataUrl = reader.result;
      var base64 = dataUrl.split(',')[1];
      cb(base64);
    };
    reader.readAsDataURL(blob);
  };

  const sendPhoto = () => {
    blobToBase64(file, (base64) => {
      const body = JSON.stringify({ image: base64, name: file.name });
      fetch('http://localhost:8000/save-project-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  };

  const createProject = () => {
    const checked = fields.filter((e) => e.value.length === 0);
    if (checked.length === 0 && croppedImageUrl) {
      setForm({
        ...form,
        imageUrl: 'projects/' + file.name + '.jpg',
      });
      fetch('http://localhost:8000/save-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token: localStorage.getItem('jwt') }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            sendPhoto();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <FormPage modal={modal} setModal={setModal}>
      <h1>Регистрация проекта</h1>
      <h3>Заполните поля</h3>
      <div className="form-group">
        <div
          className={croppedImageUrl ? 'background' : 'blocked background'}
          onClick={croppedImageUrl ? null : () => clickRef.current.click()}
        >
          <img
            style={{ display: croppedImageUrl ? 'block' : 'none' }}
            src={croppedImageUrl}
            alt="cropped"
          />
          <img
            style={{ display: croppedImageUrl ? 'none' : 'block' }}
            src={plus}
            alt="plus"
          />
        </div>
        <ImageCrop clickRef={clickRef} />
      </div>
      {fields.map((el, id) => (
        <div
          key={id}
          className={
            el.name === 'facebook' || el.name === 'inst'
              ? 'form-group ' + el.name
              : 'form-group'
          }
        >
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
            {el.name === 'facebook' || el.name === 'inst' ? (
              <img src={el.label} alt="icon" />
            ) : (
              el.label
            )}
          </label>
        </div>
      ))}
      <div className="form-group project-save">
        <button
          onClick={() => createProject()}
          className={'active auth-button'}
        >
          <h4>зарегистрировать</h4>
        </button>
      </div>
    </FormPage>
  );
};

export default ProjectForm;