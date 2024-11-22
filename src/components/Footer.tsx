// import React from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import '../assets/styles/Footer.scss'

// function Footer() {
//   return (
//     <footer>
//       <div>
//         <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
//         <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
//       </div>
//       <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
//     </footer>
//   );
// }

// export default Footer;




// footer {
//     text-align: center;
//     padding-top: 50px;
//     padding-bottom: 50px;

//     svg {
//         width: 1.1em !important;
//         height: 1.1em !important;
//         margin-right: 10px;
//     }

//     p {
//         font-size: 0.8em;
//     }
// } change it into tailwindcss and merge it with the existing Footer component.


import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className="text-center py-8">
      <div>
      <svg className="w-4 h-4 mr-2.5">
    {/* SVG content */}

        <a href="https://github.com/yujisatojr"  className=""target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </svg>
        </div>
        <p className="text-sm">A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
    );
}

