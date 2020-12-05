import layout from '@views/Layout';
import dashboard from '@views/Dashboard';
import profile from '@views/Profile';


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
];

export default routes;
