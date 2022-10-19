import React, { useState } from "react";
import Input from "../utils/Input";
import Label from "../utils/Label";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signin, signup } from "../../actions/auth";
import ErrorMessage from "../utils/ErrorMessage";
import { Button, Form } from 'semantic-ui-react'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formMethods = useForm();
  const { handleSubmit } = formMethods;
  const authData = useSelector((state) => state.auth.authData);

  const dispatch = useDispatch();
  const history = useNavigate();

  const removeError = () => {
    dispatch({ type: "REMOVE_ERROR" });
  };
  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    removeError();
  };

  const onSubmit = (data) => {
    if (isLogin) {
      dispatch(signin(data, history));
    } else {
      dispatch(signup(data, history));
    }
  };
  
  return (
    <section className="form-container centered">
      <div className="form-row centered">
        <FormProvider {...formMethods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="btn-switch">
              <button
                className={`${
                  isLogin
                    ? "bg-logbutton"
                    : "btn-hover"
                } submit-btn`}
                type="button"
                onClick={switchMode}
              >
                LOG IN
              </button>
              <button
                className={`${
                  !isLogin
                    ? "bg-logbutton"
                    : "btn-hover"
                } submit-btn`}
                type="button"
                onClick={switchMode}
              >
                SIGN UP
              </button>
            </div>

            {!isLogin && (
              <Form.Field>
                <Label labelName="Name" />
                <Input inputName="name" type="text" />
              </Form.Field>
            )}
            <Form.Field>
              <Label labelName="Email" />
              <Input inputName="email" type="email" />
            </Form.Field>
            <Form.Field>
              <Label labelName="Password" />
              <Input inputName="password" type="password" />
            </Form.Field>
            <div className="login-redirection">
                <span
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {!isLogin
                    ? "Already have an account? Log In"
                    : "Don't have an account? Sign Up"}
                </span>
                <ErrorMessage errorMessage={authData?.message} />
              </div>
            <Button type='submit' className="submit-button">{isLogin ? "Log In" : "Sign Up"}</Button>
          </Form>
        </FormProvider>
      </div>
    </section>
  );
};

export default Auth;
