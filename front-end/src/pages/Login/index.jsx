import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../../context';
import Logo, { Form } from './components';

const REDIRECT_PATHS = {
  customer: '/customer/products',
  seller: '/seller/orders',
  administrator: '/admin/manage',
};

const style = {
  left: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '425px',
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
    <div className="login-container" style={ style }>
      <Logo />
      <Form />
      {
        message
        && (
          <div className="message">
            <span data-testid="common_login__element-invalid-email">
              { message }
            </span>
          </div>)
      }
    </div>
  );
}
