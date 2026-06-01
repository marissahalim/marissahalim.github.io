export function Footer() {
    return <div>
        <footer className="bg-neutral-primary-soft m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-body sm:text-center">© 2026 Marissa Halim. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                    <li>
                        <a href="mailto:marissahalim1@gmail.com" className="hover:underline me-4 md:me-6">Email me!</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/marissalhalim/" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/marissahalim" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6" >GitHub</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1yYCLpdbhTZ2HEmzifJCQ5T1GWk64I4kX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
                    </li>
                </ul>
            </div>
        </footer>

    </div>
}