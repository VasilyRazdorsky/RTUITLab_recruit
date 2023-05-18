import { useCallback, useEffect, useState } from "react";

export default function useFormValidation({
  passwordInput,
  nameInput,
  createEventInput,
}) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    title: "",
    description: "",
    address: "",
    startDate: "",
    coordinates: [55.75399399999374, 37.62209300000001],
    posterUrl: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [target, setTarget] = useState("");

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.validationMessage,
    });
    setTarget(e.target);
    console.log(values, isFormValid);
  };

  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
      );
  };

  const resetForm = useCallback(
    (values = {}, errors = {}, isValid = false) => {
      setValues(values);
      setErrors(errors);
      setIsFormValid(isValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  useEffect(() => {
    if (createEventInput) {
      let finalBool = true;
      if (
        values.title.length < 4 ||
        values.description.length < 4 ||
        values.address.length < 4 ||
        values.startDate.length < 10 ||
        values.posterUrl.length < 4
      ) {
        finalBool = false;
      }
      setIsFormValid(finalBool);
    } else {
      if (
        values.email &&
        validateEmail(values.email) &&
        target.checkValidity()
      ) {
        let finalBool = true;
        if (passwordInput && values.password.length < 3) {
          finalBool = false;
        }

        if (nameInput && values.name.length < 2) {
          finalBool = false;
        }
        setIsFormValid(finalBool);
      } else {
        setIsFormValid(false);
      }
    }
  }, [target, values]);

  return { values, handleInputChange, errors, isFormValid, resetForm };
}
