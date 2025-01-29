// Done by Kunal Thakur

import React from "react";

const Homepage = () => {
  return (
    <div className="main-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-2">
            <span>  Educenter</span>: Empowering Minds, Shaping Futures 
            </h1>
            <strong>
              "Unlocking Potential, Transforming Lives - Your Success is Our Goal."
            </strong>
            <p>
            Educenter is dedicated to transforming education through personalized learning experiences. We empower students with the skills and knowledge needed for academic success and real-world challenges, fostering growth, innovation, and a lifelong passion for learning.
            </p>
          </div>
          <div className="col-md-6">
            <img src={require("../images/5240.jpg")} alt="Educenter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
