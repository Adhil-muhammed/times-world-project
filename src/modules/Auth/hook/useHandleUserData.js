import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onChangeUserCredentials } from "reduxConfig";

export const useHandleUserData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [validated, setValidated] = React.useState(false);
  const userCredential = useSelector((state) => state?.user);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      navigate("/home", {
        replace: true,
      });
    }

    setValidated(true);
  };

  const onChange = (e) => {
    const { value, name } = e?.target;

    dispatch(onChangeUserCredentials({ name, value }));
  };

  return { validated, userCredential, handleSubmit, onChange };
};
