import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../store/actions";
import FormField from "../common/FormField/FormField";
import PhoneInput from "../common/PhoneInput";
import { Form } from "react-final-form";
import { roles } from "../../data/filters";
import SelectFilter from "../common/Select/SelectFilter";
import Modal from "../common/Modal/Modal";

const required = (value) => (value ? undefined : "Это поле обязательно");

const EmployeeAdd = () => {
  const [showModal, setShowModal] = useState(false);
  const { successMessage } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    dispatch(addEmployee({ ...values, id: Date.now() }));
    setShowModal(true);
    // navigate("/");
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="list">
      <h1>Добавление нового сотрудника</h1>
      <div className="form-wrap">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__field">
                <FormField
                  name="name"
                  validate={required}
                  component="input"
                  type="text"
                  placeholder="Имя"
                />
              </div>
              <div className="form__field">
                <FormField
                  name="phone"
                  validate={required}
                  component={PhoneInput}
                  placeholder="Телефон"
                />
              </div>
              <div className="form__field">
                <FormField
                  name="birthday"
                  validate={required}
                  component="input"
                  type="text"
                  placeholder="Дата рождения"
                />
              </div>
              <div className="form__field">
                <FormField
                  name="role"
                  validate={required}
                  options={roles}
                  label="Должность"
                  component={SelectFilter}
                />
              </div>
              <div className="form__checkbox">
                <FormField
                  name="isArchive"
                  component="input"
                  type="checkbox"
                  label=" В архиве:"
                />
              </div>
              <button className="button" type="submit">
                Добавить
              </button>
            </form>
          )}
        />
      </div>
      {showModal && (
        <Modal
          onModalClose={handleModalClose}
          text={successMessage}
          submit={handleModalClose}
          btnText="Ок"
        />
      )}
    </div>
  );
};

export default EmployeeAdd;
