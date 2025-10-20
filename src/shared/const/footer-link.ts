import { FilmIcon, HomeIcon, LucideIcon, SearchIcon } from 'lucide-react';

export interface IFOOTERLINK {
  icon: LucideIcon;
  label: string;
  link: string;
}

export const FOOTERLINK1: IFOOTERLINK[] = [
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
  {
    icon: SearchIcon,
    label: 'Search',
    link: '/',
  },
];
