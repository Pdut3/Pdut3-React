import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project">
        <img src="images/WDS.PNG" alt="Workday Scheduler" />
        <div className="project-links">
          <a href="https://pdut3.github.io/workday-scheduler/">Workday Scheduler</a>
          <a href="https://github.com/Pdut3/workday-scheduler">GitHub</a>
        </div>
      </div>

      <div className="project">
        <img src="images/PWG.PNG" alt="Password Generator" />
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
        <img src="images/NT.PNG" alt="Note Taker" />
        <div className="project-links">
          <a href="https://pdut3.github.io/NoteTaker/">Note Taker</a>
          <a href="https://github.com/Pdut3/NoteTaker">GitHub</a>
        </div>
      </div>

      <div className="project">
        <img src="images/CQ.PNG" alt="Code Quiz" />
        <div className="project-links">
          <a href="https://pdut3.github.io/code-quiz/">Code Quiz</a>
          <a href="https://github.com/Pdut3/code-quiz">GitHub</a>
        </div>
      </div>

      <div className="project">
        <img src="images/TPro.PNG" alt="Team Profile" />
        <div className="project-links">
          <a href="https://github-production-user-asset-6210df.s3.amazonaws.com/115908348/242770935-8cafdd94-dbbe-4021-80f4-c5cfd55092ac.webm">Team Profile</a>
          <a href="https://github.com/Pdut3/TeamProfile">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
