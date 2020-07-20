import React from "react";

export default function Skills() {
  return (
    <>
      <div className="container-fluid">
        <section>
          <main className="offset-md-2 my-3 px-3 pt-3" id="skills">
            <h1 className="title">Skills</h1>
            <div className="container py-4">
              <h4 className="description">Programming languages & tools</h4>
              <div className="container programming-icons">
                <img
                  src="https://img.icons8.com/color/96/000000/html-5.png"
                  alt="HTML5"
                  className="img-fluid"
                ></img>

                <img
                  src="https://img.icons8.com/color/96/000000/css3.png"
                  alt="CSS"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/javascript.png"
                  alt="JavaScript"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/bootstrap.png"
                  alt="Bootstrap"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/git.png"
                  alt="Git"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/plasticine/96/000000/react.png"
                  alt="Reactjs"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/vue-js.png"
                  alt="Vuejs"
                  className="img-fluid"
                ></img>
                <img
                  src="https://avatars0.githubusercontent.com/u/22138497?s=400&v=4"
                  width="96"
                  height="96"
                  alt="Vuetify"
                  className="img-fluid"
                ></img>
                <img
                  src="https://cdn.quasar.dev/logo/512/quasar-logo.png"
                  width="96"
                  height="96"
                  alt="Quasar"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/nodejs.png"
                  alt="Nodejs"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/python.png"
                  alt="Python"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/mongodb.png"
                  alt="MongoDB"
                  className="img-fluid"
                ></img>
                <img
                  src="https://img.icons8.com/color/96/000000/npm.png"
                  alt="NPM"
                  className="img-fluid"
                ></img>
              </div>
            </div>
            <div className="container pt-4 pb-1">
              <h4 className="description">Communication Languages</h4>
              <div className="col d-flex justify-content-between pt-1 languages">
                <div className="container">
                  <h5 className="my-0">
                    <img
                      src="https://img.icons8.com/officexs/16/000000/vietnam.png"
                      alt="Vietnamese"
                      className="mb-1"
                    ></img>{" "}
                  Vietnamese
                </h5>
                  <p className="proficiency mx-1">Native Proficiency</p>
                </div>

                <div className="container">
                  <h5 className="my-0">
                    <img
                      src="https://img.icons8.com/officexs/16/000000/usa.png"
                      alt="American English"
                      className="mb-1"
                    ></img>{" "}
                  English
                </h5>
                  <p className="proficiency mx-1">Bilingual Proficiency</p>
                </div>

                <div className="container">
                  <h5 className="my-0">
                    <img
                      src="https://img.icons8.com/officexs/16/000000/france.png"
                      alt="French"
                      className="mb-1"
                    ></img>{" "}
                  French
                </h5>
                  <p className="proficiency mx-1">Limited Proficiency</p>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
      <hr></hr>
    </>
  );
}
