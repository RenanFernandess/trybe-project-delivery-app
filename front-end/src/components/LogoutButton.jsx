import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import userContext from '../context';

export default function LogoutButton({ testId, className }) {
  const { resetUser } = useContext(userContext);
  const history = useHistory();

  const logout = () => {
    resetUser();
    localStorage.clear();
    history.push('/');
  };

  return (
    <button
      className={ className }
      type="button"
      onClick={ logout }
      data-testid={ testId }
    >
      Sair
    </button>
  );
}

LogoutButton.propTypes = {
  testId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
