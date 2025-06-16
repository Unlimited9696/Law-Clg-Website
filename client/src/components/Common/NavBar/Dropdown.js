"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';

function Dropdown({ data, setNavOpen }) {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const pathname = usePathname();
    const router = useRouter();
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropDownOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);
    
    // Close dropdown when route changes
    useEffect(() => {
        setDropDownOpen(false);
    }, [pathname]);

    // Toggle dropdown on click (for mobile) while preserving hover behavior on desktop
    const handleDropdownToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDropDownOpen(!dropDownOpen);
    };
    
    // Handle link click - navigate to the page and close menus
    const handleLinkClick = (path, customOnClick = null) => (e) => {
        if (customOnClick) {
            customOnClick(e);
        } else {
            e.preventDefault();
            setDropDownOpen(false);
            if (setNavOpen) {
                setNavOpen(false);
            }
            // Use setTimeout to ensure the menu closes before navigation
            setTimeout(() => {
                router.push(path);
            }, 100);
        }
    };

    return (
        <li 
            className='relative'
            ref={dropdownRef}
            onMouseEnter={() => window.innerWidth >= 768 && setDropDownOpen(true)}
            onMouseLeave={() => window.innerWidth >= 768 && setDropDownOpen(false)}
        >
            <button 
                onClick={handleDropdownToggle}
                className="flex items-center justify-between w-full font-medium text-white hover:text-blue-200 px-3 py-3 md:py-2 min-h-[44px] md:min-h-0"
                aria-expanded={dropDownOpen}
            >
                {data.title}
                <svg 
                    className={`w-4 h-4 ms-2.5 transition-transform duration-200 ${dropDownOpen ? 'rotate-180' : ''}`} 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* Dropdown menu */}
            <div
                className={`${!dropDownOpen ? 'hidden' : 'block'} md:absolute top-full left-0 mt-1 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-full md:w-52 z-50 transform transition-all duration-200 ease-in-out ${dropDownOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                aria-labelledby="dropdownNavbarButton"
            >
                <ul className="py-2 text-sm text-gray-700">
                    {data.links.map((el, index) => (
                        <li key={index}>
                            <button 
                                onClick={handleLinkClick(el.path, el.onClick)}
                                className="block w-full text-left px-6 py-3 md:px-4 md:py-2 hover:bg-gray-100 text-blue-900 hover:text-blue-700 min-h-[44px] md:min-h-0 transition-colors duration-200"
                            >
                                {el.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}

export default Dropdown