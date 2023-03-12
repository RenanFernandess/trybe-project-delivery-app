import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/navBar';
import { getAPI, localStorageHandling } from '../../utils';
import AdminForm from './AdminForm';
import UsersTable from './UsersTable';

import '../../styles/style.adm.css';

const { getLocalStorage } = localStorageHandling;

export default function AdminPage() {
  const { location: { pathname } } = useHistory();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [fetchReturn, setFetchReturn] = useState();

  useEffect(() => {
    const fetch = async () => {
      await getAPI('/login', setUsers);
    };
    fetch();
  }, []);

  useEffect(() => {
    setCurrentUser(getLocalStorage('user'));
  }, []);

  return (
    <div className="main-container-adm">

      <div>
        <NavBar route={ pathname } />
        { fetchReturn && (
          <p data-testid="admin_manage__element-invalid-register">
            ERRO
          </p>
        ) }
        <div className="main-container-form">
          <h3> Cadastrar novo usuário</h3>
          <AdminForm
            setUsers={ setUsers }
            token={ currentUser.token }
            setFetchReturn={ setFetchReturn }
          />
        </div>
        <div className="main-container-adm-table">
          <h3>Listas de Usuários</h3>
          {
            users.length > 0 && <UsersTable
              setUsers={ setUsers }
              users={ users
                .filter((u) => u.role !== 'administrator') }
            />
          }
        </div>
      </div>
    </div>
  );
}
