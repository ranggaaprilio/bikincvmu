import layout from '@views/Layout';
import dashboard from '@views/Dashboard';


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
];

export default routes;
