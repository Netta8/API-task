import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import "./Cards.css";

const Home = () => {
  const navigate = useNavigate();

  const navigateToComponent = (componentPath) => {
    navigate(componentPath);
  };
  return (
    <div className="home-container">
      <img
        className="theme-image"
        src="https://img.freepik.com/premium-photo/watercolor-confetti-white-background-adorable-rainbow-colored-dots-happy-celebration-wide-colorful-bright-card-interesting-hand-painted-confetti_174187-6820.jpg?w=2000"
        alt="super hero special need child"
      />
      <h1>NB special needs Center Berlin</h1>
      <h2>Center for Children with Special Needs</h2>

      <p>
        An infant who has difficulty holding himself upright. A toddler who does
        not wave "bye bye" or bring toys to her parents. A preschooler whose
        speech is delayed. A child whose disruptive behaviors causes problems at
        home or school. Or, a child who seems to be "different" and cannot make
        friends. These are some of the children we see at the Center for
        Children with Special Needs (CCSN) at
        <strong> NB special needs Center Berlin</strong>. The world can be
        frustrating for a child with developmental difficulties. Whether you are
        the parent, or the child's teacher, therapist, or health care provider,
        the CCSN provides a comprehensive resource for evaluation, diagnosis,
        treatment, advocacy and support for children with diverse disabilities.
        With a team of specialists, the CCSN is one of the largest programs of
        its kind in Germany.
      </p>
      <h3>Our Mission:</h3>
      <p>
        To promote the wellbeing and resilience of neurodiverse children, youth,
        and their families. With our courses and treatment, we empower families
        to overcome barriers to their child's growth and development in a
        culture of equitable care and opportunity, inclusivity, mutual respect,
        and understanding.
      </p>
      <section className="section">
        <h2>Check out our Campus Programs</h2>
        <section className="cards-section">
          <div className="Dance-card">
            <div className="card" onClick={() => navigateToComponent("/dance")}>
              <h3>Dance</h3>
              <h4>The Benefits Of Dance For Special Needs Students:</h4>
              <h6>Overall physical fitness </h6>
              <h6>Improvements in flexibility, strength, and motor skills</h6>
              <h6>An increase in confidence and self-esteem</h6>
              <h6>An outlet for creativity and imagination</h6>
              <h6>Excellent stress relief</h6>
            </div>
          </div>
          <div className="Karate-card">
            <div
              className="card"
              onClick={() => navigateToComponent("/karate")}
            >
              <h3>Karate</h3>
              <h4>These programs can help improve:</h4>
              <h6>strength, physical and motor skills</h6>
              <h6>awareness</h6>
              <h6>patience and determination</h6>
              <h6>sensory and speech</h6>
            </div>
          </div>
          <div className="Swimming-card">
            <div
              className="card"
              onClick={() => navigateToComponent("/swimming")}
            >
              <h3>Swimming</h3>
              <h4>Our Program</h4>
              <h6>Therapeutic Aquatic Program (T.A.P.)</h6>
              <h6>Adapted Swim Levels</h6>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h2>Contact Us</h2>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
