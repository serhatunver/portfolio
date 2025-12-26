import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  return (
    <div className="w-full border-b">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>
    </div>
  );
};

export default Header;
