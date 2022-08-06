import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Manage',
    group: true,
  },
  {
    title: 'Germination',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      }
    ],
  },
  {
    title: 'Botany',
    icon: 'book-open-outline',
    link: '/pages/botany',
  },
  {
    title: 'Configuration',
    group: true,
  },
  {
    title: 'Configuration',
    icon: 'options-outline',
    children: [
      {
        title: 'Devices',
        link: '/pages/hardware/device',
      }
    ],
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
