import { Link, useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return <div className="flex" id="NavBar">
        <nav className="bg-blue-100/100 fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:flex-1 md:justify-center" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary md:items-center">
                        <li>
                            {/* <a href="#" className="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a> */}
                            <Link
                                to="/"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('Projects')}
                                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('About')}
                                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                            >
                                About
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}