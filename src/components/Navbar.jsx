import { useEffect, useState } from "react";

const Navbar = () => {
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);


    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Guille Aguado</h1>
                <ul className="flex gap-6 text-sm font-medium">
                    <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    )

}
export default Navbar;