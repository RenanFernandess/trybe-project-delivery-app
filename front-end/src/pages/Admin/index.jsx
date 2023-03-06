import React, { useState, useEffect } from 'react';
import { getAPI, localStorageHandling } from '../../utils';
import AdminForm from './AdminForm';
import UsersTable from './UsersTable';

const { getLocalStorage } = localStorageHandling;

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

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
    <div>
      <AdminForm
        setUsers={ setUsers }
        token={ currentUser.token }
      />
      {
        users.length > 0 && <UsersTable
          setUsers={ setUsers }
          users={ users
            .filter((u) => u.role !== 'administrator') }
        />
      }
    </div>
  );
}
