import layout from '@views/Layout';
import dashboard from '@views/Dashboard';
import profile from '@views/Profile';
import detail from '@views/Detail';
import printPage from '../template/print';


const routes = [
  {
    path: '',
    component: layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: dashboard,
        name: 'dashboard',
        // meta: {title: 'dashboard', icon: 'dashboard', noCache: false},
      },
    ],
  },
  {
    path: '',
    component: layout,
    children: [
      {
        path: 'Profile',
        component: profile,
        name: 'profile',
        // meta: {title: 'dashboard', icon: 'dashboard', noCache: false},
      },
    ],
  },
  {
    path: '/detail/:id',
    component: layout,
    children: [
      {
        path: '',
        component: detail,
        name: 'detail',
        // meta: {title: 'dashboard', icon: 'dashboard', noCache: false},
      },
    ],
  },
  {
    path: '/print/:id',
    component: printPage,
    name: 'print',
  },
];

export default routes;
