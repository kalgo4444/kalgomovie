import { IFOOTERLINK } from '@/shared/const/footer-link';
import Link from 'next/link';

interface IProps {
  link: IFOOTERLINK;
}

export default function FooterLinkItem(props: IProps) {
  const {
    link: { link, label, icon: Icon },
  } = props;
  return (
    <li>
      <Link
        href={link}
        className="flex items-center space-x-2 text-sm md:text-base"
      >
        <Icon />
        <span>{label}</span>
      </Link>
    </li>
  );
}
