import React, { useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../../context';
import Logo, { Form } from './components';

const REDIRECT_PATHS = {
  customer: '/customer/products',
  seller: '/seller/orders',
  administrator: '/administrator/manage',
};

export default function Login() {
  const { message, role } = useContext(userContext);
  const history = useHistory();

  useMemo(() => {
    history.push(REDIRECT_PATHS[role]);
  }, [role, history]);

  return (
    <div>
      <Logo />
      <Form />
      {
        message
        && <p data-test-id="common_login__element-invalid-email">{ message }</p>
      }
    </div>
  );
}
