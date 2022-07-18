import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('./containers/GuestPortal'))
  },
  {
    path: 'guestPortal',
    component: asyncComponent(() => import('./containers/GuestPortal'))
  }
];
export default routes;
