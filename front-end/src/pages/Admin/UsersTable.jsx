import React from 'react';
import PropTypes from 'prop-types';
import { deleteAPI, getAPI } from '../../utils';

const TABLE_HEADERS = ['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];
const IDVALUE = ['name', 'email', 'role', 'remove'];
const TESTIDTABLE = 'admin_manage__element-user-table';

export default function UsersTable({ users, setUsers }) {
  const handleExcludeBtn = async (user) => {
    const { id } = users.find((u) => u.name === user.name);
    if (id) {
      await deleteAPI(`/login/${id}`, console.log);
      await getAPI('/login', setUsers);
    }
  };

  return (
    <div className="table-adm">
      <table>
        <thead>
          <tr>
            {
              TABLE_HEADERS.map((head) => <th key={ head }>{head}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            users
              .map(({ name, email, role }) => (
                { name, email, role: role === 'customer' ? 'Cliente' : 'P. Vendedora' }))
              .map((user, index) => (
                <tr key={ `${index} - ${user.name}` }>
                  <td
                    data-testid={ `${TESTIDTABLE}-item-number-${index}` }
                    className="item-number"
                  >
                    {index + 1}

                  </td>
                  {
                    Object.values(user).map((value, ind) => (
                      <td
                        key={ `${ind} - ${value}` }
                        data-testid={ `${TESTIDTABLE}-${IDVALUE[ind]}-${index}` }
                        className={ `${IDVALUE[ind]}` }
                      >
                        {value}
                      </td>
                    ))
                  }
                  <td className="delete-btn">
                    <button
                      onClick={ () => handleExcludeBtn(user) }
                      type="button"
                      data-testid={ `${TESTIDTABLE}-${IDVALUE[3]}-${index}` }
                    >
                      Excluir

                    </button>
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  setUsers: PropTypes.func.isRequired,
};
