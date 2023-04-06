import React from "react";

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="container py-5">
          <h1>Welcome to our Website</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis.
          </p>
          <a href="#" className="btn btn-light">
            Call to Action
          </a>
        </div>
      </header>

      {/* Sections */}
      <section className="py-5">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-center">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/350x200"
                alt="Section Image"
                className="img-fluid"
              />
              <h2>Section Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis.
              </p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>

            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/350x200"
                alt="Section Image"
                className="img-fluid"
              />
              <h2>Section Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis.
              </p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>

            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/350x200"
                alt="Section Image"
                className="img-fluid"
              />
              <h2>Section Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis.
              </p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
