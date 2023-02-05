import axios from 'axios';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import AuthFormikControl from '../../components/authForm/AuthFormikControl';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../utils/alert';

const initialValues = {
  phone: '',
  password: '',
  remember: false,
};
const onSubmit = (values, submitMethods, navigate) => {
  console.log(values);
  axios
    .post('http://127.0.0.1:8000/api/auth/login', {
      ...values,
      remember: values.remember ? 1 : 0,
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('loginToken', JSON.stringify(res.data));
        navigate('/');
        submitMethods.setSubmitting(false);
      } else {
        submitMethods.setSubmitting(false);
        Alert('متاسفم !', res.data.message, 'error');
      }
    });
};
const validationSchema = Yup.object({
  phone: Yup.number().required('لطفا این قسمت را پر کنید'),
  password: Yup.string()
    .required('لطفا این قسمت را پر کنید')
    .matches(/^[a-zA-Z0-9@!%$?&]+$/, 'فقط از حروف و اعداد استفاده شود'),
  remember: Yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, submitMethods) =>
        onSubmit(values, submitMethods, navigate)
      }
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <div className="wrap-login100">
            <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
              <span className="login100-form-title">ورود اعضا</span>

              <AuthFormikControl
                formik={formik}
                control="input"
                type="text"
                name="phone"
                icon="fa fa-mobile"
                label="شماره موبایل"
              />

              <AuthFormikControl
                formik={formik}
                control="input"
                type="password"
                name="password"
                icon="fa fa-lock"
                label="رمز عبور"
              />

              <AuthFormikControl
                control="switch"
                name="remember"
                icon="fa fa-lock"
                label="مرا به خاطر بسپارید"
              />

              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'لطفا صبر کنید ...' : 'ورود'}
                </button>
              </div>
            </Form>
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/auth/images/img-01.png" alt="IMG" />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
