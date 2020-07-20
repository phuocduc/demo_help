import React from "react";
import moment from 'moment';

export default function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <section>
          <main className="offset-md-2 my-3 px-3 pt-3">
            <div className="container">
            <p className="text-center" style={{ color: "#bd5d38" }} id="footer">
              Copyright {moment().format('YYYY')}. All Rights Reserved.
            </p>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}