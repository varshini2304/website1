import React from "react";
import "../../styles/Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CreativeTeam = () => {
  const teamMembers = [
    { name: "Lisa Waren", role: "Director" },
    { name: "Alex Stoke", role: "Director" },
    { name: "John Doe", role: "Manager" },
    { name: "Jane Smith", role: "Designer" },
    { name: "Michael Brown", role: "Developer" },
  ];

  return (
    <div className="creative-team-wrapper">
      <div className="header-section1">
        <div className="header-content1">
          <h1>Our Creative Team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.</p>
        </div>
      </div>

      <div className="rotated-rectangle-top"></div>
      <div className="rotated-rectangle"></div>

      <div className="team-section">
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          navigation
          className="team-slider"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className={`team-member ${index % 2 === 0 ? "odd" : "even"}`}>
                <div className="image-placeholder">298 x 315</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="social-links">
                  <a href="#" className="social-icon facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className="social-icon twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="social-icon dribbble">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CreativeTeam;
