import { Dashboard } from '../../views/Dashboard';
import { Users } from '../../views/Users';

export const LeftRoute = [
  {
    id: 0,
    icon: 'bx bx-grid-alt',
    name: 'Dashboard',
    hoverName: 'Dashboard',
    path: '/',
    component: <Dashboard />,
  },
  {
    id: 1,
    icon: 'bx bx-user',
    name: 'Users',
    hoverName: 'Users',
    path: '/users',
    component: <Users />,

  },
];
