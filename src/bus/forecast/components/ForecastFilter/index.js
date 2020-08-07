import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { CustomInputField } from "../../assets/inputs/CustomInputField";

export const ForecastFilter = () => {
  const initialValues = {
    type: "",
    minTemperature: 0,
    maxTemperature: 0,
  };
  return (
    <>
      <div className={styles.filter}>
        <Formik initialValues={initialValues}>
          {(props) => {
            const {
              values,
              handleSubmit,
              handleCahnge,
              errors,
              touched,
            } = props;
            return (
              <Form>
                <span className={styles.checkbox}>Облачно</span>
                <span className={`${styles.checkbox} `}>Солнечно</span>
                <p className={styles.custom__input}>
                  <label htmlFor="min-temperature">
                    Минимальная температура
                  </label>
                  <input id="min-temperature" type="text" />
                </p>
                <p className={styles.custom__input}>
                  <label htmlFor="min-temperature">
                    Максимальная температура
                  </label>
                  <input id="max-temperature" type="text" />
                </p>
                <button>Отфильтровать</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
