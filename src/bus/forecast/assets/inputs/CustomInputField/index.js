import React from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";

export const CustomInputField = ({ label, ...props }) => {
  const [field] = useField({
    ...props,
  });

  return (
    <>
      <div className={styles.custom__imput}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
      </div>
    </>
  );
};
