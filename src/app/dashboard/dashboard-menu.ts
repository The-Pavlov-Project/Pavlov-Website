import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/dashboard',
  },
  {
    title: 'Functionalities',
    group: true,
  },
  {
    title: 'Schedule',
    icon: 'layout-outline',
    link: '/dashboard/apps/schedule',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
