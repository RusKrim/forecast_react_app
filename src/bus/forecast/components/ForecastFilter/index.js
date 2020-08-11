import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form } from "formik";
import { InputField } from "../../assets/inputs/InputField";
import { Button } from "../../assets/button";
import { useFilter } from "../../hooks";

import cx from "classnames";

export const ForecastFilter = () => {
  const {
    setFilterDispatch,
    selected,
    setSelect,
    min,
    setMin,
    max,
    setMax,
    filtered,
    setFilter,
    filteredDays,
  } = useFilter();

  const initialValues = filteredDays || {
    type: "",
    minTemperature: 0,
    maxTemperature: 0,
  };

  const submitForm = (values) => {
    if (!min || !max) {
      alert("Min and max required");
      return;
    }

    setFilter(!filtered);
    setFilterDispatch({ selected, min, max });

    setFilter(false);
    setMin("");
    setMax("");
    setSelect("");
  };

  return (
    <>
      <div className={styles.filter}>
        <Formik initialValues={initialValues} onSubmit={submitForm}>
          {(props) => {
            const { handleChange } = props;
            return (
              <Form>
                <div className={styles.checkboxContainer}>
                  <span
                    className={cx(styles.checkboxContainer_checkbox, {
                      [styles.selected]: selected === "cloudy",
                    })}
                    onClick={() => setSelect("cloudy")}
                    onChange={handleChange}
                  >
                    Облачно
                  </span>
                  <span
                    className={cx(styles.checkboxContainer_checkbox, {
                      [styles.selected]: selected === "sunny",
                    })}
                    onClick={() => setSelect("sunny")}
                    onChange={handleChange}
                  >
                    Солнечно
                  </span>
                  <span
                    className={cx(styles.checkboxContainer_checkbox, {
                      [styles.selected]: selected === "rainy",
                    })}
                    onClick={() => setSelect("rainy")}
                    onChange={handleChange}
                  >
                    Пасмурно
                  </span>
                </div>

                <InputField
                  id="minTemperature"
                  label="Минимальная температура"
                  name="minTemperature"
                  type="number"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
                <InputField
                  id="maxTemperature"
                  label="Максимальная температура"
                  name="maxTemperature"
                  type="number"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
                <Button type="submit">Отфильтровать</Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
