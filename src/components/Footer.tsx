import React from "react";
import { Github, Linkedin } from 'lucide-react';
import { DockDemo } from "./footercomponet";
import { ClassNames } from "@emotion/react";

function Footer() {
    return (
        < div >
            <footer className="text-center py-12 ">
            <div className="flex justify-center space-x-4">
               
                <DockDemo />
            </div>
            <p className="text-sm mt-4">
                A portfolio designed & built by <a href="https://github.com/sumit-kumar19" target="_blank" rel="noreferrer" className="text-purple-600">Sumit kumar</a> with 💜
            </p>
        </footer>
        </div>
    );
}

export default Footer;
