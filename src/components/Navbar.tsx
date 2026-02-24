import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: { className: 'bg-[#0A1128]/80 backdrop-blur-xl shadow-lg', targets: navRef.current },
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav className="fixed w-full z-40 top-0 px-4 py-4 md:px-8 md:py-6 pointer-events-none">
            <div
                ref={navRef}
                className="max-w-7xl mx-auto rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 pointer-events-auto"
            >
                <div className="flex-shrink-0">
                    <img
                        src="/images/Arena_Riqueza_logo.svg"
                        alt="Arena da Riqueza"
                        className="h-16 md:h-20 w-auto object-contain"
                    />
                </div>
                <div>
                    <button className="btn-gold text-sm md:text-base px-6 py-3 rounded-md rounded-tl-xl rounded-br-xl">
                        Proteger Patrimônio
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
