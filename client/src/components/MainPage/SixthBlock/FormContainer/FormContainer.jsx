import React from 'react';

import './FormContainer.scss';

const FormContainer = () => (
    <div className="form-container">
        <h3><span>Н</span>ачни творить добрый дела сейча<span>С</span></h3>
        <h3><span>С</span>тать волонтер легк<span>о!</span></h3>
        <form action="POST">
            <input type="email" name="email" placeholder="Email" required />
            <button className="gradient-btn"><h4>Зарегистрироваться</h4></button>
        </form>
    </div>
)

export default FormContainer;