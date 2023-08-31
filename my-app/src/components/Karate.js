import React, { useState } from "react";

const Karate = () => {
  const [availablePlaces, setAvailablePlaces] = useState(4);
  const [registeredCount, setRegisteredCount] = useState(0);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [parentFirstName, setParentFirstName] = useState("");
  const [childFirstName, setChildFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const openRegistration = () => {
    setRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setRegistrationOpen(false);
  };

  const handleParentFirstNameChange = (event) => {
    setParentFirstName(event.target.value);
  };

  const handleChildFirstNameChange = (event) => {
    setChildFirstName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (availablePlaces > 0) {
      setAvailablePlaces(availablePlaces - 1);
      setRegisteredCount(registeredCount + 1);
      closeRegistration();
      alert(
        "Thank you for registering, we will get back to you soon for more details"
      );
    }
  };

  return (
    <div className="program-container">
      <div className="sidebar">
        <div className="small-registration-form">
          <h3>register to our Karate program now!</h3>
          <p>Available places: {availablePlaces}</p>
          <p>Registered count: {registeredCount}</p>
          <button onClick={openRegistration}>Register</button>
        </div>
      </div>

      {registrationOpen && (
        <div className="sidebar popUp-form">
          <h3>Registration Form:</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Parent's First Name:
              <input
                type="text"
                value={parentFirstName}
                onChange={handleParentFirstNameChange}
              />
            </label>
            <br />
            <label>
              Child's First Name:
              <input
                type="text"
                value={childFirstName}
                onChange={handleChildFirstNameChange}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <div className="container">
        <div className="content">
          <img
            className="theme-component-img"
            src="https://images.squarespace-cdn.com/content/v1/59270466bebafb67ee0853c3/1505835963792-XKXC4HDYQKASUIZ6W2RP/special+needs+1.jpg"
            alt=" karate belts"
          ></img>
          <h1>Karate course</h1>
          <p>
            It's no secret, Karate training is one of the most influential
            activities for the development of children. For children with
            special needs the structure and discipline is invaluable. Our Karate
            lessons focuses on overall personal improvement, not sport or
            competition. Karate is the ideal sport for kids for building
            self-confidence, balance, co-ordination, discipline and courtesy,
            while learning basic self-defence skills. Special needs karate is a
            cornerstone program of 6tigers. Students receive one-on-one
            instruction from experienced teachers in order to work on physical
            techniques, strength, social skills, safety training, and verbal
            assertiveness. Children range in ages and belt levels - some have
            been training in the martial arts for more than 10 years! Our
            program works to build students' confidence and gives them pride in
            their achievements. The majority of our classes cater for children
            aged 5 years and up, however we also conduct classes for 3-4 year
            olds in selected venues. Step by step instructions on every
            technique. We will be going over the drills and fixing your
            technique together one step, 1 drill, 1 rep at a time. Follow along
            with me for an amazing martial lesson that you can do as a family
            together. If you have kids, do this course with them.
          </p>
          <h2>who will be your teacher?</h2>
          <div className="teacher-img-container">
            <img
              className="teacher-img"
              src="https://www.wkf.net/imagenes/noticias/interna-noticia20230622200828.jpg"
              alt="karate teacher"
            ></img>
          </div>
          <p>
            Sensei Vlad is a Brooklyn College graduate with a bachelor's degree
            in management and finance. With a Minor in Psychology. Sensei Vlad
            was a collegiate wrestling champion in scholastic, freestyle and
            greco styles. Sensei Vlad placed first in his weight class in New
            York City's PSAL Wrestling Championships in 2004 and 2005; and in an
            earlier citywide competition, he led (as captain) the FDR High
            School wrestling team( Brooklyn) to a first-place victory for 3
            years in a row. In 2005, Sensei Vlad was awarded the Heisman Award,
            voted as the city's top and most valuable wrestler of the year.
            Sensei Vlad had won Numerous Championship in Karate tournament
            taking 1st places in NYS Championship in 2012, AKL International
            Tournament Champion in his Weight Division. Top contender in Sport
            Karate (point Figthing). Undefeated in the MMA Cage figts 2 wins 0
            losses. Fluent in weapons training with Bo staff, nun chucks, kamas,
            kali/escrima, and more
          </p>
          <hr />
          <p>
            We include all levels of functionality. We instruct students from
            extremely low functioning to high functioning. We offer group
            classes on Saturday consisting of lower to moderate functioning,
            moderate to higher functioning and high functioning. Private
            instruction is available 7 days weekly for students who do not fit
            well in a group environment at this time, but who will thrive with
            private instruction with an experienced coach.
          </p>

          <h3>Gallery</h3>
          <img
            className="gallery-img"
            src="https://www.pressenterprise.com/wp-content/uploads/2022/06/RPE-L-TAEKWONDO-0618-12MS.jpg?w=777"
            alt="karate 1"
          ></img>
          <img
            className="gallery-img"
            src="https://specialneedstaekwondo.files.wordpress.com/2016/08/malaysia-sntkd.jpg"
            alt="karate 2"
          ></img>
          <img
            className="gallery-img"
            src="https://images.squarespace-cdn.com/content/v1/624cf4d5473a9a72a6072bf9/290fdb7c-815d-4ee7-a83e-787e9f9860e8/IMG_9920.jpg?format=750w"
            alt="karate 3"
          ></img>
          <img
            className="gallery-img"
            src="https://assets.cdn.filesafe.space/5ZXC91xTUah6ezIT9ne7/media/61ce44370c13b9eb3b10100c.jpeg"
            alt="karate 4"
          ></img>
          <img
            className="gallery-img"
            src="https://i.pinimg.com/736x/3e/d0/e4/3ed0e4e1a08f93c0e0469300699bb381.jpg"
            alt="karate 5"
          ></img>
          <img
            className="gallery-img"
            src="https://www.wvi.org/sites/default/files/Picture%20343.jpg"
            alt="karate 6"
          ></img>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/89aQOQowELs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karate;
