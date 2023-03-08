import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="container-fluid mt-4">
        <footer className="text-white text-center text-lg-start bg-dark">
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!--Grid row--> */}
            <div className="row mt-4">
              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>

                <p className="text-left">
                  I am proficient in all aspects of MERN stack development,
                  including MongoDB, Express.js, React.js, and Node.js. I have
                  experience in both front-end and back-end development, and I
                  am comfortable with database design and development using
                  MongoDB.
                </p>

                <div className="mt-4">
                  {/* <!-- Facebook --> */}
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg icons"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {/* <!-- Dribbble --> */}
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg icons"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                  {/* <!-- Twitter --> */}
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg icons"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  {/* <!-- Google + --> */}
                  <a
                    type="button"
                    className="btn btn-floating btn-light btn-lg icons"
                  >
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  {/* <!-- Linkedin --> */}
                </div>
              </div>
              {/* <!--Grid column-->

        <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg text-white"
                  />
                  <label className="form-label" for="formControlLg">
                    Search
                  </label>
                </div>

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">Lahore, Pakistan</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">hafizahmad022@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+92 323 8045354</span>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column-->

        <!--Grid column--> */}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container -->

    <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a className="text-white">MidProject/TechLift</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
};

export default Footer;
