import React from "react";
import Scrollspy from "react-scrollspy";

export default function NavigationBar() {
  return (
    <div className="container-fluid" id="top">
      <div className="row h-100">
        <aside
          className="col-12 col-md-2 p-0 fixed-top"
          style={{ backgroundColor: "#bd5d38" }}
          navigation-main
        >
          <nav
            className="navbar navbar-expand navbar-dark flex-md-column flex-row align-items-start py-2"
            id="mainNav"
            style={{ backgroundColor: "#bd5d38" }}
          >
            <div className="container d-flex justify-content-between">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQHxuU6uFaDBTg/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=CN06cOlNHDF1O3jEepngVOtMF0oJwkp73Rw06hbwq_c"
                width="150"
                height="150"
                className="img-fluid rounded-circle d-none d-md-inline my-5"
                alt="Profile"
              ></img>
            </div>

            <div className="container collapse navbar-collapse">
              <Scrollspy
                items={[
                  "top",
                  "about",
                  "education",
                  "experience",
                  "skills",
                  "portfolio",
                  "interest"
                ]}
                currentClassName="active"
                className="flex-md-column flex-row navbar-nav w-100 justify-content-around"
              >
                <li className="nav-item nav-text d-block d-md-none">
                <a className="float" href="#top">
                  <i class="fas fa-arrow-up my-float"></i>
                </a>
              </li>
                <li className="nav-item nav-text">
                  <a className="nav-link pl-0 d-none d-md-inline" href="#about">
                    {" "}
                    <span>About</span>
                  </a>
                </li>
                <li className="nav-item nav-text">
                  <a className="nav-link pl-0" href="#education">
                    {" "}
                    <span>Education</span>
                  </a>
                </li>
                <li className="nav-item nav-text">
                  <a className="nav-link pl-0" href="#experience">
                    {" "}
                    <span>Experience</span>
                  </a>
                </li>
                <li className="nav-item nav-text">
                  <a className="nav-link pl-0" href="#skills">
                    {" "}
                    <span>Skills</span>
                  </a>
                </li>
                <li className="nav-item nav-text">
                  <a className="nav-link pl-0" href="#portfolio">
                    {" "}
                    <span>Portfolio</span>
                  </a>
                </li>
                <li className="nav-item nav-text">
                  <a className="nav-link pl-0 d-none d-md-inline" href="#interest">
                    {" "}
                    <span>Interests</span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
}
