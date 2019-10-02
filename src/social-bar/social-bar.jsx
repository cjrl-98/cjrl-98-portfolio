import React from "react";

import "./social-bar.css";

const SocialBar = () => {
    return (
        <div className="social-side-bar">
      <a href="https://www.linkedin.com/in/christian-lagasca-5a1625186/">
        <i class="fab fa-linkedin social-icons"></i>
        <span>LinkedIn</span>
      </a>

      <a href="https://dribbble.com/cjrl_">
        <i class="fab fa-dribbble social-icons"></i>
        <span>Dribbble</span>
      </a>

      <a href="https://github.com/cjrl-98">
        <i class="fab fa-github social-icons"></i>
        <span>GitHub</span>
      </a>
    </div>
    );
};

export default SocialBar;