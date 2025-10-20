import { FOOTERLINK1 } from '@/shared/const/footer-link';
import MainLogo from '../logo/main-logo';
import FooterLinkCollection from './footer-link-collection';

export default function Footer() {
  return (
    <footer className="mt-10 mb-20 w-full">
      <div className="container bg-accent rounded-2xl grid grid-cols-2 lg:grid-cols-4 py-4 sm:p-4">
        <MainLogo />
        <FooterLinkCollection collection={FOOTERLINK1} title="Feature" />
      </div>
    </footer>
  );
}
