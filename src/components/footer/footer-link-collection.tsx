import { IFOOTERLINK } from '@/shared/const/footer-link';
import FooterLinkItem from './footer-link-item';

interface IProps {
  collection: IFOOTERLINK[];
  title: string;
}

export default function FooterLinkCollection(props: IProps) {
  const { collection, title } = props;
  return (
    <ul className="flex flex-col space-y-2">
      <b className="mb-6">{title}</b>
      {collection.map((link, inx: number) => (
        <FooterLinkItem key={inx} link={link} />
      ))}
    </ul>
  );
}
