import React, { useState } from "react";
import { Form } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateEmployee } from "../../store/actions";
import FormField from "../common/FormField/FormField";
import PhoneInput from "../common/PhoneInput";
import SelectFilter from "../common/Select/SelectFilter";
import Modal from "../common/Modal/Modal";
import { roles } from "../../data/filters";
import "./EmployeeStyle.scss";
const required = (value) => (value ? undefined : "Это поле обязательно");

const EmployeeEdit = () => {
  const [showModal, setShowModal] = useState(false);
  const { successMessage } = useSelector((state) => state.employees);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentEmployee = useSelector((state) =>
    state.employees.employees.find((el) => el.id === parseInt(id))
  );

  const onSubmit = (values) => {
    dispatch(updateEmployee({ ...values, id: parseInt(id) }));
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
  };

  if (!currentEmployee) return <div>Сотрудник не найден</div>;

  return (
    <div className="list">
      <h1>Редактирование сотрудника</h1>
      <div className="form-wrap">
        <Form
          initialValues={currentEmployee}
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
                  label=" В архиве:"
                  name="isArchive"
                  component="input"
                  type="checkbox"
                />
              </div>
              <button className="button" type="submit">
                Сохранить
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

export default EmployeeEdit;
