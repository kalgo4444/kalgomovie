import MainLogo from '../logo/main-logo';
import { ModeToggle } from '../mode-toggle';
import NavLink from '../nav-link/nav-link';

export default function Header() {
  return (
    <header className="w-full h-20 sticky top-0 left-0 z-50 border bg-background">
      <nav className="container relative h-full flex items-center justify-between">
        <MainLogo />
        <NavLink />
        <ModeToggle />
      </nav>
    </header>
  );
}
