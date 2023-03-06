import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../../context';
import Logo, { Form } from './components';

const REDIRECT_PATHS = {
  customer: '/customer/products',
  seller: '/seller/orders',
  administrator: '/admin/manage',
};

export default function Login() {
  const { message, role, token } = useContext(userContext);
  const history = useHistory();

  useEffect(() => {
    history.push(REDIRECT_PATHS[role]);
  }, [role, history]);

  useEffect(() => {
    if (token) history.push(REDIRECT_PATHS[role]);
  });

  return (
    <div>
      <Logo />
      <Form />
      {
        message
        && <p data-testid="common_login__element-invalid-email">{ message }</p>
      }
    </div>
  );
}
