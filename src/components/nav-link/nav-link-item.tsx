import { NAVLINK } from '@/shared/const/nav-link';
import { usePathname, useRouter } from 'next/navigation';

export default function NavLinkItem({ nav_link }: { nav_link: NAVLINK }) {
  const { icon: Icon, label, link } = nav_link;
  const pathname = usePathname();
  const route = useRouter();
  const isActive = pathname === link;
  return (
    <li
      className={`flex w-[100px] py-2 cursor-pointer flex-col items-center justify-center ${isActive ? 'bg-accent rounded-md' : 'hover:bg-card hover:rounded-md duration-200'} `}
      onClick={() => route.push(link)}
    >
      <Icon />
      <span className="text-sm md:text-lg">{label}</span>
    </li>
  );
}
