import React from "react";

const Timeline = () => (
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Sekcja Timeline</h2>
          <h3 className="section-subheading text-muted">
            Przykład sekcji timeline.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>1997</h4>
                  <h4 className="subheading">Moje urodziny :)</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Urodziłem się w Gdyni</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="img/about/2.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2004</h4>
                  <h4 className="subheading">Pójście do szkoły</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Szkoła podstawowa publiczna 97, a potem prywatna
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="img/about/3.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2016</h4>
                  <h4 className="subheading">Dostałem się na PG!</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Moim pierwszym wyborem była Elektronika i Telekomunikacja.
                    Chciałem zostać grafikiem, ale wyszło jak wyszło i jestem
                    programistą :(
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Koniec
                  <br />
                  mojej
                  <br />
                  historii
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
