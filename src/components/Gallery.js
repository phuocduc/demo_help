import React from "react";

export default function Gallery() {
  return (
    <>
      <div className="container-fluid">
        <section>
          <main className="offset-md-2 my-3 px-3 pt-3" id="portfolio">
            <h1 className="title">Portfolio</h1>
            <div className="container py-4">
              <h3>Web Development</h3>
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top img-fluid"
                    src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d998a2d43ac480009ae9bbf/screenshot.png"
                    width="100"
                    height="200"
                    alt="Airfighter"
                  ></img>
                  <div className="card-body">
                    <h2 className="card-title">Airfighter</h2>
                    <p className="card-text">
                      This is a simple Canvas-based game that requires a solid
                      understanding of the principles of JavaScript programming
                      to customize.
                    </p>
                  </div>
                  <div className="card-footer text-right">
                    <a
                      href="https://github.com/llamadelrey/CoderSchool-airfighter-game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark mx-2"
                    >
                      Repository
                    </a>
                    <a
                      href="https://airfighter.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark ml-2"
                    >
                      Demo
                    </a>
                  </div>
                </div>

                <div className="card">
                  <img
                    className="card-img-top img-fluid"
                    src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5dad35c94b2f1500082eaaf1/screenshot.png"
                    width="100"
                    height="200"
                    alt="IMDB"
                  ></img>
                  <div className="card-body">
                    <h2 className="card-title">IMDB Clone</h2>
                    <p className="card-text">
                      A clone IMDB using the public{" "}
                      <a
                        href="https://developers.themoviedb.org/3/discover/movie-discover"
                        style={{ color: "#bd5d38" }}
                      >
                        Movie DB API
                      </a>{" "}
                      using Bootstrap 4 and Reactjs.
                    </p>
                  </div>
                  <div className="card-footer text-right">
                    <a
                      href="https://github.com/llamadelrey/CoderSchool-imdb"
                      className="btn btn-outline-dark mx-2"
                      target="_blank"
                    >
                      Repository
                    </a>
                    <a
                      href="https://baileyimdbclone.netlify.com/"
                      target="_blank"
                      className="btn btn-outline-dark ml-2"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container py-4">
              <h3>Other Personal Project(s)</h3>
              <h4 className="description">nolasafehaven.org</h4>
              <h5>English - Vietnamese Content Translator</h5>
              <p className="my-0">
                A mobile app currently being developed to serve a community of
                vulnerable Vietnamese immigrants in Louisiana, who are terrified
                to report sexual and/or domestic crimes to police for a variety
                of reasons. Public advocates will also be able to help the
                victims directly with this tool.
              </p>
            </div>
            <div className="container py-4">
              <h4 className="description">Classroom Inc.</h4>
              <h5>Volunteer Backend Engineer - Vietnamese Team Project Manager</h5>
              <p className="my-0">
                Classroom, Inc. is an American nonprofit that creates middle school literacy learning games set in the professional world and coaches educators on blended learning.
              </p>
            </div>
          </main>
        </section>
      </div>
      <hr></hr>
    </>
  );
}
