import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { UserProvider, CartProvider } from '../../context';
import App from '../../App';

const renderPath = (path) => {
  const history = createMemoryHistory();
  history.push(path);
  const { ...resources } = render(
    <Router history={ history }>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </Router>,
  );
  return { ...resources, history };
};

export default renderPath;

// export default function renderWithRouter(component) {
//   const history = createMemoryHistory();
//   return {
//     ...render(
//       <UserProvider>
//         <CartProvider>
//           <Router history={ history }>
//             { component }
//           </Router>
//         </CartProvider>
//       </UserProvider>,
//     ),
//     history,
//   };
// }
