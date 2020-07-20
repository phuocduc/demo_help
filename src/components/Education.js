import React from "react";

export default function Education() {
  return (
    <>
      <div className="container-fluid">
        <section>
          <main className="offset-md-2 my-3 px-3 pt-3" id="education">
            <h1 className="title">Education</h1>
            <div className="container py-4">
              <div className="d-flex justify-content-between">
                <h3>CoderSchool</h3>
                <p className="my-0" style={{ color: "#bd5d38" }}>
                  <strong>Sierra - September 2019</strong>
                </p>
              </div>
              <h4 className="description">Full-Stack Web Development</h4>
              <p className="my-0">- HTML, CSS, and JavaScript.</p>
              <p className="my-0">- Frontend engineering in React.</p>
              <p className="my-0">- Backend engineering in Python and Flask.</p>
            </div>
          </main>
        </section>
      </div>
      <hr></hr>
    </>
  );
}
