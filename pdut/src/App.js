import PWGImage from './images/PWG.PNG';
import NTImage from './images/NT.PNG';
import CQImage from './images/CQ.PNG';
import TProImage from './images/TPro.PNG';
import PD3Image from './images/PD3.PNG';
import WDSImage from './images/WDS.PNG';
import githubImage from './images/github.PNG';
import LinkedinImage from './images/Linkedin.PNG';
import './App.css';
import React from 'react';

function Portfolio() {
  return (
    <>
      <header>
        <h1>Paul Dutile III</h1>
        <nav>
          <ul>
            <li className="active"><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <img src={PD3Image} alt= "Developer Photo" />
          <p>My name is Paul, originally from the Boston area. Moved to Utah 8 years ago. My interest in coding has been around for a while, I looked into it more once I got laid off from my previous job, I was a sales leader and many good and talented and uber qualified people were let go with me, and I thought how do I set myself apart if that ever happens again.</p>
          <p>Once completed with the program I will probably look into a salesforce certification, take that and my sales and business background and help boost any organization.</p>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="project">
          <img src={WDSImage}  alt="Workday Scheduler" />
            <div className="project-links">
              <a href="https://pdut3.github.io/workday-scheduler/">Workday Scheduler</a>
              <a href="https://github.com/Pdut3/workday-scheduler">GitHub</a>
            </div>
          </div>

          <div className="project">
            <img src={PWGImage} alt="Password Generator" />
            <div className="project-links">
              <a href="https://pdut3.github.io/password-generator-2/">Password Generator</a>
              <a href="https://github.com/Pdut3/password-generator-2">GitHub</a>
            </div>
          </div>

          <div className="project">
            <div className="project-links">
              <a href="https://github-production-user-asset-6210df.s3.amazonaws.com/115908348/242755427-3b0eb995-7450-4751-bc5b-472ca87e30b1.webm">README Generator</a>
              <a href="https://github.com/Pdut3/README-Gen">GitHub</a>
            </div>
          </div>

          <div className="project">
            <img src={NTImage} alt="Note Taker" />
            <div className="project-links">
              <a href="https://pdut3.github.io/NoteTaker/">Note Taker</a>
              <a href="https://github.com/Pdut3/NoteTaker">GitHub</a>
            </div>
          </div>

          <div className="project">
            <img src={CQImage} alt="Code Quiz" />
            <div className="project-links">
              <a href="https://pdut3.github.io/code-quiz/">Code Quiz</a>
              <a href="https://github.com/Pdut3/code-quiz">GitHub</a>
            </div>
          </div>

          <div className="project">
            <img src={TProImage} alt="Team Profile" />
            <div className="project-links">
              <a href="https://github-production-user-asset-6210df.s3.amazonaws.com/115908348/242770935-8cafdd94-dbbe-4021-80f4-c5cfd55092ac.webm">Team Profile</a>
              <a href="https://github.com/Pdut3/TeamProfile">GitHub</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>Email: <a href="mailto:your-email@example.com">pdutile3@gmail.com</a></p>
            <p>Phone: +1 401-658-6903</p>
          </div>
          <div className="contact-form-container">
            <form id="contact-form">
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
                <span className="error-message" id="email-error"></span>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <a href="resume.pdf">Download Resume</a>
          <ul>
            <li>Proficiency 1</li>
            <li>Proficiency 2</li>
            <li>Proficiency 3</li>
            {/* Add more proficiencies */}
          </ul>
        </section>
      </main>

      <footer>
      <a href="https://github.com/Pdut3"><img src={githubImage} alt="Github" /></a>
<a href="https://www.linkedin.com/in/paul-dutile-iii-2a8886221/"><img src={LinkedinImage} alt="LinkedIn" /></a>

      </footer>
    </>
  );
}

export default Portfolio;

