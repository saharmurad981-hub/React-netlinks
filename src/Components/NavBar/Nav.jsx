
import React from "react";

import logo from "../../assets/Netlinks-img/logopic.png";
import pic1 from "../../assets/Netlinks-img/home-hero-640.webp";
import pic2 from "../../assets/Netlinks-img/mtn.webp";
import pic3 from "../../assets/Netlinks-img/siemens.webp";
import pic4 from "../../assets/Netlinks-img/unesco.webp";
import pic5 from "../../assets/Netlinks-img/who.webp";
import pic6 from "../../assets/Netlinks-img/un-women.webp";
import pic7 from "../../assets/Netlinks-img/undp.webp";
import pic8 from "../../assets/Netlinks-img/world-bank.webp";
import pic9 from "../../assets/Netlinks-img/usaid.webp";
import pic10 from "../../assets/Netlinks-img/ifc.webp";
import pic11 from "../../assets/Netlinks-img/tetra-tech.webp";
import pic12 from "../../assets/Netlinks-img/home-feature-odoo-1280.webp";
import pic13 from "../../assets/Netlinks-img/home-feature-ai-1280.webp";
import pic14 from "../../assets/Netlinks-img/home-feature-engineering-1280.webp";
import pic16 from "../../assets/Netlinks-img/Capture.PNG";
import pic17 from "../../assets/Netlinks-img/x.svg";
import pic18 from "../../assets/Netlinks-img/github.svg";
import pic19 from "../../assets/Netlinks-img/instagram.svg";
import pic15 from "../../assets/Netlinks-img/youtube.svg";



import "./NavStyle.css";

export default function Nav() {
  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav>
        <img src={logo} alt="Netlinks Logo" id="logo" />

        <ul className="nav-ul">
          <li>
            <a href="#">Solutions</a>
          </li>

          <li>
            <a href="#">Services</a>
          </li>

          <li>
            <a href="#">Industries</a>
          </li>

          <li>
            <a href="#">Partners</a>
          </li>

          <li>
            <a href="#">Company</a>
          </li>
        </ul>

        <button id="nav-btn">Get Started</button>
      </nav>


      {/* ================= HERO ================= */}

      <div className="hero-container">

        <div>

          <button className="hero-btn">
            20 years delivering from Kabul Afghanistan's
            enterprise technology partner
          </button>

          <h1 className="h1-hero">
            Enterprise Odoo, custom software, and AI
            <span className="span-hero">
              <em> engineered in Afghanistan.</em>
            </span>
          </h1>

          <p className="hero-p">
            Afghanistan-based since 2005. We built the
            500,000-employee Odoo HR payroll system for the
            national government, and Jobs.af, the country's
            largest job hunting platform. Senior teams in Kabul
            delivering for clients across Afghanistan, the GCC,
            India, and the US.
          </p>

          <button className="hero2-btn">
            Book a 30-min discovery call
          </button>

          <button className="other-hero-btn">
            Explore services
          </button>

          <hr />

        </div>

        <div>
          <img
            src={pic1}
            className="pic1"
            alt="Netlinks technology"
          />
        </div>

      </div>


      {/* ================= HERO STATS ================= */}

      <div className="bottom-hero">

        <div>
          <p className="bottom-p">
            500K <span>+</span>
          </p>

          <p>Employees</p>
          <p>National</p>
          <p>Government Odoo</p>
          <p>HR Rollout</p>
        </div>

        <div>
          <p>
            20 <span>yrs</span>
          </p>

          <p>Experience</p>
          <p>Technology</p>
          <p>Government</p>
          <p>Projects</p>
        </div>

        <div>
          <p>Jobs.af</p>

          <p>Largest</p>
          <p>Job</p>
          <p>Platform</p>
          <p>Afghanistan</p>
        </div>

      </div>


      {/* ================= TRUSTED BY ================= */}

      <section>

        <div
          style={{
            backgroundColor: "rgb(233, 229, 229)",
          }}
        >

          <h6
            style={{
              textAlign: "center",
              color: "rgb(116, 113, 113)",
              paddingTop: "12px",
            }}
          >
            TRUSTED BY GLOBAL ENTERPRISE AND INSTITUTIONS
          </h6>

          <div
            style={{
              display: "flex",
              gap: "19px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "10px",
            }}
          >

            <img src={pic2} width="90px" alt="MTN" />
            <img src={pic3} width="90px" alt="Siemens" />
            <img src={pic4} width="90px" alt="UNESCO" />
            <img src={pic5} width="90px" alt="WHO" />
            <img src={pic6} width="90px" alt="UN Women" />
            <img src={pic7} width="90px" alt="UNDP" />
            <img src={pic8} width="90px" alt="World Bank" />
            <img src={pic9} width="90px" alt="USAID" />
            <img src={pic10} width="90px" alt="IFC" />
            <img src={pic11} width="90px" alt="Tetra Tech" />

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section style={{ marginTop: "88px" }}>

        <div
          style={{
            display: "flex",
            gap: "5rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >

          <h1
            style={{
              fontSize: "2.5em",
              width: "450px",
              margin: 0,
            }}
          >
            Six Services. One{" "}
            <span style={{ color: "rgb(121, 91, 149)" }}>
              <em>accountable partner.</em>
            </span>
          </h1>

          <p
            style={{
              width: "420px",
              fontSize: "12px",
              marginTop: "63px",
              fontFamily: "sans-serif",
            }}
          >
            We provide enterprise technology services that
            combine business understanding, engineering
            expertise, and practical implementation.
          </p>

        </div>


        {/* SERVICE TABLE */}

        <section
          style={{
            marginTop: "40px",
            overflowX: "auto",
          }}
        >

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >

            <tbody>

              <tr>

                <td
                  style={{
                    padding: "25px",
                    border: "1px solid #ddd",
                    verticalAlign: "top",
                  }}
                >
                  <h4>Odoo ERP Services</h4>

                  <p>
                    Enterprise Odoo implementation,
                    customization, migration, and support.
                  </p>
                </td>

                <td
                  style={{
                    padding: "25px",
                    border: "1px solid #ddd",
                    verticalAlign: "top",
                  }}
                >
                  <h4>Custom Software</h4>

                  <p>
                    Custom software designed around
                    specific business requirements.
                  </p>
                </td>

                <td
                  style={{
                    padding: "25px",
                    border: "1px solid #ddd",
                    verticalAlign: "top",
                  }}
                >
                  <h4>AI Solutions</h4>

                  <p>
                    AI-powered systems and intelligent
                    business automation.
                  </p>
                </td>

              </tr>


              <tr>

                <td
                  style={{
                    padding: "25px",
                    border: "1px solid #ddd",
                    verticalAlign: "top",
                  }}
                >
                  <h4>Web Development</h4>

                  <p>
                    Modern websites and web applications
                    for organizations and enterprises.
                  </p>
                </td>

                <td
                  style={{
                    padding: "25px",
                    border: "1px solid #ddd",
                    verticalAlign: "top",
                  }}
                >
                  <h4>Digital Transformation</h4>

                  <p>
                    Technology strategies that improve
                    business operations.
                  </p>
                </td>

                <td
                  style={{
                    padding: "25px",
                    border: "1px solid #ddd",
                    verticalAlign: "top",
                  }}
                >
                  <h4>Technology Consulting</h4>

                  <p>
                    Practical technology guidance for
                    growing organizations.
                  </p>
                </td>

              </tr>

            </tbody>

          </table>

        </section>

      </section>


      {/* ================= ONE PLATFORM ================= */}

      <section
        style={{
          backgroundColor: "whitesmoke",
          marginTop: "64px",
          padding: "40px",
        }}
      >

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >

          <div
            style={{
              flex: 1,
              minWidth: "300px",
            }}
          >

            <h1 style={{ fontSize: "3em" }}>
              One platform. Every department.{" "}
              <span style={{ color: "rgb(121, 91, 149)" }}>
                <i>Actually integrated.</i>
              </span>
            </h1>

            <p
              style={{
                width: "350pt",
                maxWidth: "100%",
              }}
            >
              Certified Odoo partner with enterprise
              implementations across finance, operations,
              sales, HR, and manufacturing.
            </p>

            <ul
              style={{
                width: "380px",
                maxWidth: "100%",
              }}
            >

              <li>
                50+ Odoo deployments delivered
              </li>

              <li>
                Odoo migration from legacy systems
              </li>

              <li>
                Custom Odoo modules
              </li>

              <li>
                Enterprise Odoo for multiple industries
              </li>

            </ul>

            <button
              style={{
                backgroundColor: "whitesmoke",
                border: "1px solid gray",
                padding: "12px",
                borderRadius: "20px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Explore Odoo services
            </button>

          </div>


          <div>

            <img
              src={pic12}
              style={{
                width: "600px",
                maxWidth: "100%",
              }}
              alt="Odoo platform"
            />

          </div>

        </div>


        {/* ================= AI ================= */}

        <div
          style={{
            display: "flex",
            marginTop: "90px",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >

          <div
            style={{
              flex: 1,
              minWidth: "300px",
            }}
          >

            <img
              src={pic13}
              style={{
                marginTop: "53px",
                width: "550px",
                maxWidth: "100%",
              }}
              alt="AI Agents"
            />

          </div>


          <div
            style={{
              flex: 1,
              minWidth: "300px",
            }}
          >

            <h1 style={{ fontSize: "3em" }}>
              Agents That don't just chat,{" "}
              <span style={{ color: "rgb(121, 91, 149)" }}>
                <i>they Work.</i>
              </span>
            </h1>

            <p>
              Intelligent AI agents designed to automate
              repetitive business processes and help teams
              work more efficiently.
            </p>

            <ul>

              <li>Business process automation</li>
              <li>AI-powered workflows</li>
              <li>Intelligent assistants</li>
              <li>Enterprise AI solutions</li>

            </ul>

            <button
              style={{
                backgroundColor: "whitesmoke",
                border: "1px solid gray",
                padding: "12px",
                borderRadius: "20px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Explore AI services
            </button>

          </div>

        </div>


        {/* ================= ENGINEERING ================= */}

        <div
          style={{
            display: "flex",
            marginTop: "90px",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >

          <div
            style={{
              marginLeft: "34px",
              flex: 1,
              minWidth: "300px",
            }}
          >

            <h1 style={{ fontSize: "3em" }}>
              When nothing off-the-shelf{" "}
              <span style={{ color: "rgb(121, 91, 149)" }}>
                <i>quite fits.</i>
              </span>
            </h1>

            <p>
              We design and engineer custom technology
              solutions when existing software cannot
              completely solve the problem.
            </p>

            <ul>

              <li>Custom software engineering</li>
              <li>Custom Odoo modules</li>
              <li>Enterprise integrations</li>
              <li>Scalable technology architecture</li>

            </ul>

            <button
              style={{
                backgroundColor: "whitesmoke",
                border: "1px solid gray",
                padding: "12px",
                borderRadius: "20px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Engineering Philosophy
            </button>

          </div>


          <div>

            <img
              src={pic14}
              style={{
                marginTop: "53px",
                width: "550px",
                maxWidth: "100%",
              }}
              alt="Engineering"
            />

          </div>

        </div>

      </section>


      {/* ================= INDUSTRIES ================= */}

      <section style={{ marginTop: "80px" }}>

        <div
          style={{
            display: "flex",
            gap: "5rem",
            marginLeft: "20px",
            flexWrap: "wrap",
          }}
        >

          <h1
            style={{
              fontSize: "2.5em",
              width: "450px",
            }}
          >
            Pattern recognition{" "}
            <span style={{ color: "rgb(121, 91, 149)" }}>
              <em>across verticals.</em>
            </span>
          </h1>

          <p
            style={{
              width: "420px",
              fontSize: "12px",
              marginTop: "63px",
              fontFamily: "sans-serif",
            }}
          >
            Our experience across industries helps us
            understand different operational challenges
            and build practical technology solutions.
          </p>

        </div>


        {/* INDUSTRY ITEMS */}

        <div
          style={{
            padding: "25px",
            borderBottom: "1px solid #ddd",
          }}
        >
          01
          <h3>Manufacturing</h3>
          <p>
            Technology solutions for manufacturing
            operations and enterprise workflows.
          </p>
        </div>


        <div
          style={{
            padding: "25px",
            borderBottom: "1px solid #ddd",
          }}
        >
          02
          <h3>Retail & eCommerce</h3>
          <p>
            Digital systems for modern retail and
            eCommerce businesses.
          </p>
        </div>


        <div
          style={{
            padding: "25px",
            borderBottom: "1px solid #ddd",
          }}
        >
          03
          <h3>Professional Services</h3>
          <p>
            Integrated technology for service-based
            organizations.
          </p>
        </div>


        <div
          style={{
            padding: "25px",
            borderBottom: "1px solid #ddd",
          }}
        >
          04
          <h3>Public Sector</h3>
          <p>
            Enterprise technology for government
            organizations and public institutions.
          </p>
        </div>


        <div
          style={{
            padding: "25px",
            borderBottom: "1px solid #ddd",
          }}
        >
          05
          <h3>Nonprofits</h3>
          <p>
            Digital tools that support nonprofit
            organizations and their missions.
          </p>
        </div>


        <div
          style={{
            padding: "25px",
            borderBottom: "1px solid #ddd",
          }}
        >
          06
          <h3>Trades & Field Services</h3>
          <p>
            Technology designed for field operations
            and service teams.
          </p>
        </div>

      </section>


      {/* ================= QUOTE ================= */}

      <section>

        <div
          style={{
            textAlign: "center",
            padding: "40px",
            marginTop: "50px",
          }}
        >

          <img
            src={pic16}
            width="53px"
            alt="Netlinks"
            style={{
              marginTop: "37px",
            }}
          />

          <p
            style={{
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            We didn't watch Afghanistan's tech sector emerge,{" "}
            <i>
              <span
                style={{
                  color: "rgb(121, 91, 149)",
                }}
              >
                we helped build it.
              </span>
            </i>
          </p>

          <p style={{ color: "gray" }}>
            Farshid Ghyasi - Founder, Netlinks
          </p>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section
        style={{
          backgroundColor: "white",
          padding: "40px",
        }}
      >

        <div>

          <h1 style={{ fontSize: "29px" }}>
            Answers To what CIOs Actually ask.
          </h1>

          <p
            style={{
              padding: "15px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            What does Netlinks do?
          </p>

          <p
            style={{
              padding: "15px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            How experienced is Netlinks with Odoo?
          </p>

          <p
            style={{
              padding: "15px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            What Industries does Netlinks serve?
          </p>

          <p
            style={{
              padding: "15px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            How does an engagement with Netlinks start?
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section
        style={{
          borderBottom: "1px solid rgb(145, 157, 168)",
        }}
      >

        <div
          style={{
            backgroundColor: "rgb(150, 89, 194)",
            borderRadius: "20px",
            margin: "83px",
            padding: "48px",
            textAlign: "center",
          }}
        >

          <p
            style={{
              color: "white",
              fontSize: "3rem",
            }}
          >
            Talk To a senior architect
            <br />

            <span>
              <i>this week.</i>
            </span>
          </p>

          <p
            style={{
              color: "white",
              fontSize: "13px",
            }}
          >
            30-minute call. Discuss your business,
            technology needs, and possible solutions.
          </p>

          <button
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "23px",
              color: "rgb(150, 89, 194)",
              padding: "9px",
              fontSize: "0.7rem",
              cursor: "pointer",
            }}
          >
            Book a 30min discovery call
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div
          style={{
            display: "flex",
            gap: "6rem",
            fontSize: "0.8rem",
            padding: "32px",
            borderBottom: "1px solid rgb(156, 170, 185)",
            flexWrap: "wrap",
          }}
        >

          {/* COMPANY */}

          <div>

            <img
              src={logo}
              alt="Netlinks logo"
              width="90px"
              height="18px"
            />

            <p style={{ width: "234px" }}>
              Netlinks provides enterprise technology,
              software development, Odoo, and AI solutions.
            </p>

            <a
              href="mailto:info@netlinks.af"
              style={{
                textDecoration: "none",
                color: "lightslategray",
              }}
            >
              info@netlinks.af
            </a>

            <br />

            <div>077-302-0101</div>

            <div>
              Netlinks Plaza, street 6, lane 3 - Shar-e-now
              <br />
              Kabul, Afghanistan
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >

              <img src={pic17} width="20px" alt="X" />
              <img src={pic18} width="20px" alt="GitHub" />
              <img src={pic19} width="20px" alt="Instagram" />
              <img src={pic15} width="20px" alt="YouTube" />

            </div>

          </div>


          {/* SOLUTIONS */}

          <div>

            <p><strong>Solutions</strong></p>
            <p>Enterprise Odoo</p>
            <p>Custom Software</p>
            <p>AI Solutions</p>
            <p>Digital Transformation</p>

          </div>


          {/* SERVICES */}

          <div>

            <p><strong>Services</strong></p>
            <p>Odoo Services</p>
            <p>Web Development</p>
            <p>AI Development</p>
            <p>Consulting</p>

          </div>


          {/* INDUSTRIES */}

          <div>

            <p><strong>Industries</strong></p>
            <p>Manufacturing</p>
            <p>Retail</p>
            <p>Public Sector</p>
            <p>Nonprofits</p>

          </div>


          {/* COMPANY */}

          <div>

            <p><strong>Company</strong></p>
            <p>About Us</p>
            <p>Partners</p>
            <p>Careers</p>
            <p>Contact</p>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.7rem",
            padding: "0 32px",
            flexWrap: "wrap",
          }}
        >

          <p>
            © 2026 Netlinks. All rights reserved.
          </p>

          <p>
            Privacy Policy
          </p>

        </div>

      </footer>

    </div>
  );
}
