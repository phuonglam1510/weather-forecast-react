/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ROUTES from 'Constants/Routes';
import { Row, Col, notification } from 'antd';
import { Formik, Form } from 'formik';
import { FormInput, Button } from 'Components';
import { Redirect } from 'react-router-dom';
import { FormItem } from 'formik-antd';
import { AuthContext } from 'context/AuthProvider';
import LoginSchema from './LoginSchema';

import './LoginStyle.scss';

const cover = require('assets/images/sontung.png');

interface Props {}

const LoginComponent: React.FunctionComponent<Props> = () => {
  const authContext: any = useContext(AuthContext);

  const onSubmit = async (values: any) => {
    try {
      await authContext.handleLogin(values.email, values.password);
    } catch (error) {
      notification.error({
        message: error,
      });
    }
  };

  return (
    <Row className="Login-Container">
      <Col md={8} xs={24} className="Left">
        <img alt="profile" src={cover} className="Background" />
        <div className="Logo">
          <h1>ALO SHOW</h1>
          <h4>Admin Portal</h4>
        </div>
      </Col>
      <Col md={16} xs={24}>
        <div className="Form-Container">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, isSubmitting }: any) => (
              <Form translate="form" onSubmit={handleSubmit}>
                <h3>Welcome back</h3>
                <FormItem label="Email" name="email">
                  <FormInput name="email" placeholder="email@site.com" />
                </FormItem>
                <FormItem label="Password" name="password">
                  <FormInput name="password" placeholder="Enter password" type="password" />
                </FormItem>
                <div className="Login-Container__Button">
                  <Button type="primary" htmlType="submit" loading={isSubmitting} block>
                    Sign In
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
      {authContext.isAuthenticated && <Redirect to={ROUTES.APP} />}
    </Row>
  );
};

export default LoginComponent;
