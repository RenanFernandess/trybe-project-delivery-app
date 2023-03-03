import React, { useState, useEffect } from 'react';
import { getAPI } from '../../utils';
import AdminForm from './AdminForm';
import UsersTable from './UsersTable';

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await getAPI('/login', setUsers);
    };
    fetch();
  }, []);

  return (
    <div>
      <AdminForm setUsers={ setUsers } />
      {
        users.length > 0 && <UsersTable
          users={ users
            .filter((u) => u.role !== 'administrator') }
        />
      }
    </div>
  );
}
