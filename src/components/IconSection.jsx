import React from "react";

const IconSection = () => (
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Sekcja</h2>
          <h3 className="section-subheading text-muted">Tekst sekcji</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-link fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading h4">Nagłówek</h4>
          <p className="text-muted">
            Za pomocą fa-... możemy wstawiać przykładowe gotowe ikony. Tutaj
            jest to fa-link.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-code fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Nagłówek</h4>
          <p className="text-muted">
            Za pomocą fa-... możemy wstawiać przykładowe gotowe ikony. . Tutaj
            jest to fa-code.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-user fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Web Security</h4>
          <p className="text-muted">
            Za pomocą fa-... możemy wstawiać przykładowe gotowe ikony. Tutaj
            jest to fa-user.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default IconSection;
