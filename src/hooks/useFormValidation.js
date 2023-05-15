import { useCallback, useEffect, useState } from "react";

export default function useFormValidation({ passwordInput, nameInput }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
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
    if (values.email && validateEmail(values.email) && target.checkValidity()) {
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
  }, [target, values]);

  return { values, handleInputChange, errors, isFormValid, resetForm };
}
