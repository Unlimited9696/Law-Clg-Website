"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";

function NavLinks({ setNavOpen }) {
  const router = useRouter();
  
  const handleAdmissionClick = (e) => {
    e.preventDefault();
    if (setNavOpen) setNavOpen(false);
    
    // Use setTimeout to ensure the menu closes before scrolling
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const element = document.getElementById('admission-enquiry');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };
  
  // Handle direct link navigation
  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    if (setNavOpen) setNavOpen(false);
    
    // Use setTimeout to ensure the menu closes before navigation
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        router.push(path);
      }
    }, 100);
  };

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      isDropdown: true,
      title: "About",
      links: [
        {
          title: "About TSP",
          path: "/academics/AboutTSP/",
        },
        {
          title: "About SSNLC",
          path: "/academics/AboutSSNLC/",
        },
        {
          title: "Leadership",
          path: "/academics/leadership/",
        },
        {
          title: "Governing Body",
          path: "/academics/GoverningBody/",
        }
      ]
    },
    {
      isDropdown: true,
      title: "Academics",
      links: [
        {
          title: "Library",
          path: "/academics/resources/library",
        },
        {
          title: "Moot Court",
          path: "/academics/moot-court",
        },
        {
          title: "Committees",
          path: "/academics/resources/committes",
        },
        {
          title: "Programs",
          path: "/academics/departments/llb",
        },
        {
          title: "Syllabus",
          path: "/academics/departments/syllabus",
        },
        {
          title: "Certificate Course",
          path: "/academics/resources/CertificateCourse",
        }
      ]
    },
    {
      isDropdown: true,
      title: "Admission Enquiry",
      links: [
        {
          title: "Admission Procedure",
          path: "/academics/AdmissionProcedure",
        },
        {
          title: "Prospectus",
          path: "/academics/departments/llb",
        },
        {
          title: "Admission Enquiry", 
          path: "/academics/Enquiry",
          //onClick: handleAdmissionClick
        }
      ]
    },
    {
      title: "Important Links",
      path: "/important-links",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Faculty",
      path: "/faculty",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {links.map((el, index) => (
        <React.Fragment key={index}>
          {el.isDropdown ? (
            <Dropdown data={el} setNavOpen={setNavOpen} />
          ) : (
            <li className="transition duration-300 ease-in-out">
              <button 
                onClick={handleLinkClick(el.path)}
                className="font-medium text-blue-950 md:text-white hover:text-blue-600 md:hover:text-blue-200 px-3 py-3 md:py-2 block text-center md:text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {el.title}
              </button>
            </li>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default NavLinks;