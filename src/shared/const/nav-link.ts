import { FilmIcon, HomeIcon, LucideIcon } from 'lucide-react';

export interface NAVLINK {
  icon: LucideIcon;
  label: string;
  link: string;
}

export const NAVLINK: NAVLINK[] = [
  {
    icon: HomeIcon,
    label: 'Home',
    link: '/',
  },
  {
    icon: FilmIcon,
    label: 'Movie',
    link: '/movie',
  },
];
