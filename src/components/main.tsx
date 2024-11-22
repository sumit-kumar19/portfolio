import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Main() {

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: 'url("../images/bg-dark.png")' }}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 py-12">
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" className="w-36 rounded-full z-10" />
        </div>
        <div className="content text-white text-left z-10">
          <div className="hidden md:flex gap-4">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer" className="text-white">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer" className="text-white">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold my-4">Yuji Sato</h1>
          <p className="text-2xl">Full Stack Engineer</p>

          {/* Mobile Icons */}
          <div className="flex md:hidden gap-4 mt-4">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer" className="text-white">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer" className="text-white">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
