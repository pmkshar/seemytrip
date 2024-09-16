import { Link } from 'react-router-dom';
import { UPI } from '../assets/images';

const Footer = () => {
  return (
    <footer className="footer skin-light-footer">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="footer-widget">
                <div className="d-flex align-items-start flex-column mb-3">
                  <div className="d-inline-block"><img src={require('../assets/images/train-4 (1).png')} className="img-fluid" width={160} alt="Footer Logo" />
                  </div>
                </div>
                <div className="footer-add pe-xl-3">
                  <p>We make your dream more beautiful &amp; enjoyful with lots of happiness.</p>
                </div>
                <div className="foot-socials">
                  <ul>
                    <li><Link to="#" onClick={(e) => { e.preventDefault() }}><i className="fa-brands fa-facebook" /></Link></li>
                    {/* <li><Link to="#" onClick={(e) => { e.preventDefault() }}><i className="fa-brands fa-linkedin" /></Link></li> */}
                    <li><Link to="#" onClick={(e) => { e.preventDefault() }}><i className="fa-brands fa-google-plus" /></Link></li>
                    <li><Link to="#" onClick={(e) => { e.preventDefault() }}><i className="fa-regular fa-envelope"></i></Link></li>
                    {/* <li><Link to="#" onClick={(e) => { e.preventDefault() }}><i className="fa-brands fa-twitter" /></Link></li> */}
                    {/* <li><Link to="#" onClick={(e) => { e.preventDefault() }}><i className="fa-brands fa-dribbble" /></Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">The Navigation</h4>
                <ul className="footer-menu">
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Talent Marketplace</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Payroll Services</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Direct Contracts</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Hire Worldwide</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Hire in the India</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>How to Hire</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">Our Resources</h4>
                <ul className="footer-menu">
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Free Business tools</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Affiliate Program</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Success Stories</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Upwork Reviews</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Resources</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Help &amp; Support</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h4 className="widget-title">The Company</h4>
                <ul className="footer-menu">
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>About Us</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Leadership</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Contact Us</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Investor Relations</Link></li>
                  <li><Link to="#" onClick={(e) => { e.preventDefault() }}>Trust, Safety &amp; Security</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4 className="widget-title">Payment Methods</h4>
                <div className="pmt-wrap">
                  {/* <img className="img-fluid" src="assets/img/visa.png" width={55} alt="Visa" /> */}
                  <div className="card h-100">
                    <div className="bg-dark p-4 rounded-3">
                      <div className="d-flex justify-content-between align-items-start">
                        <img className="img-fluid text-white" src="assets/img/visa.png" width={55} alt="Visa" />
                        {/* Card action START */}
                        <div className="dropdown">
                          <Link className="text-white" to="#" id="creditcardDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* Dropdown Icon */}
                            <svg width={24} height={24} fill="none">
                              <circle fill="currentColor" cx="12.5" cy="3.5" r="2.5" />
                              <circle fill="currentColor" opacity="0.5" cx="12.5" cy="11.5" r="2.5" />
                              <circle fill="currentColor" opacity="0.3" cx="12.5" cy="19.5" r="2.5" />
                            </svg>
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="creditcardDropdown">
                            <li><Link className="dropdown-item" to="#"><i className="bi bi-credit-card-2-front-fill me-2 fw-icon" />Edit card</Link></li>
                            <li><Link className="dropdown-item" to="#"><i className="bi bi-calculator me-2 fw-icon" />Currency converter</Link></li>
                          </ul>
                        </div>
                        {/* Card action END */}
                      </div>
                      <h4 className="text-white fs-6 mt-4">**** **** **** 1569</h4>
                      <div className="d-flex justify-content-between text-white mt-4">
                        <div className="d-flex flex-column">
                          <span className="text-md">Issued on</span>
                          <span className="text-sm fw-medium text-uppercase">Jason Dsouza</span>
                        </div>
                        <div className="d-flex text-end flex-column">
                          <span className="text-md">Valid upto</span>
                          <span>12/2027</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="our-prtwrap mt-4">
                  <div className="prtn-title">
                    <p className="text-muted-2 fw-medium">Our Partners</p>
                  </div>
                  <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                    <div className="pmt-wrap pe-4">
                      {/* <img src="https://placehold.co/300x100" className="img-fluid" alt="" /> */}
                      <img src={UPI} alt="" style={{width:"50px"}}/>
                    </div>
                    <div className="pmt-wrap pe-4">
                      {/* <img src="https://placehold.co/300x100" className="img-fluid" alt="" /> */}
                    </div>
                    <div className="pmt-wrap pe-4">
                      {/* <img src="https://placehold.co/300x100" className="img-fluid" alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom border-top">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* <div className="col-xl-6 col-lg-6 col-md-6">
                <p className="mb-0">© 2023 GeoTrip Design by Themezhub.</p>
              </div> */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                <li><Link to="#">Terms of services</Link></li>
                <li className="ms-3"><Link to="#">Privacy Policies</Link></li>
                <li className="ms-3"><Link to="#">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 