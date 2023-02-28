import React, { useContext } from 'react';
import userContext from '../../context';
import Logo, { Form } from './components';

export default function Login() {
  const { message } = useContext(userContext);

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
