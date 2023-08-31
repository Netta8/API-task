import React, { useState } from "react";

const Dance = () => {
  const [availablePlaces, setAvailablePlaces] = useState(10);
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
          <h3>register to our Dance program now!</h3>
          <p>Available places: {availablePlaces}</p>
          <p>Registered count: {registeredCount}</p>
          <button onClick={openRegistration}>Register</button>
        </div>
      </div>

      {registrationOpen && (
        <div className="sidebar popUp-form">
          <h3>Registration Form:</h3>
          <br />
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
            src="https://www.libertydancecenter.com/wp-content/uploads/2018/06/dance-classes-for-special-needs-children.jpg"
            alt="top dance lessons"
          />
          <h1>Dance course</h1>
          <p>
            At NB special needs Center Berlin, we believe that everyone can
            dance. For nearly 50 years, NB's Center programs have served
            children of all abilities, including dancers who are Deaf and
            hard-of-hearing; dancers who are blind or have low vision; and
            dancers with a range of intellectual, emotional, and physical
            disabilities. In addition to our fully inclusive programming in
            schools, NB offers specialized programming beyond the school day for
            dancers with disabilities
          </p>
          <h2>who will be your teachers?</h2>
          <div className="teacher-img-container">
            <img
              className="teacher-img"
              src="https://russianmastersballet.com/upload/iblock/62e/62e97f256e96f44decf275861c3d65ba.jpg"
              alt="Dance teacher1"
            ></img>
            <img
              className="teacher-img"
              src="https://www.gazettenet.com/getattachment/4b989ae4-705d-49db-8b97-e19f03be3811/BlackBeauty-HG-072820-ph1"
              alt="Dance teacher2"
            ></img>
            <img
              className="teacher-img"
              src="https://media.licdn.com/dms/image/D4E03AQH1QSM9PUEXTg/profile-displayphoto-shrink_800_800/0/1682760138944?e=2147483647&v=beta&t=odfayh3D0-Ne6Y9sk4hf15e7tafndSnQlgeoXtAZirk"
              alt="Dance teacher2"
            ></img>
          </div>
          <p>
            <strong>Stephanie White</strong>, MA taught dance to children with
            special needs in inclusion and self-contained classrooms for over 20
            years at PS 372 in Brooklyn. Recently retired, she is now the
            Coordinator of the Arnhold Support Programs for Dance Educators at
            the Office of Arts and Special Projects in NYC.{" "}
            <strong>Lea Montagi-Rene</strong> is a professional development
            facilitator with the Arts for Students with Disabilities Team (NYC
            DOE) and is the Advocacy Director for the NYS Dance Education
            Association. A member of NDEO since 2005, Sandi is a founding member
            of the NDEO Dance and Disabilities Task Force, whose goal is to
            increase the organization's capacity to support the dance and
            disability community and to pave the way for more inclusive
            membership and representation. <strong>Isabella Muller</strong> is
            co-author (with C. Gallant and D. Duggan) of Dance Education for
            Diverse Learners: A Special Education Supplement to the Dance
            Blueprint and has been published in Dance: Current Selected Research
            Volume 7 and Dance Education in Practice, where she is a member of
            the Editorial Board. Sandi was an adjunct Professor at Hofstra
            University from 2008-2018, teaching Dance in Elementary Education.
            Prior to teaching full-time was the founding Artistic Director of
            Soundance Repertory Company (1984-1999), and her choreography has
            been presented throughout the Northeast. Sandi teaches OPDI-114:
            Teaching Dance to Students with Disabilities.
          </p>
          <hr />
          <h3>The DREAM Project</h3>
          <p>
            The NB DREAM Project (Dancers Realize Excellence through Arts and
            Movement) is an inclusive dance program that provides children with
            and without disabilities the opportunity to perform. In this unique
            program, children with a wide range of disabilities and a group of
            age-matched, non-disabled peers from NB's Advanced Teams become
            partners, dancing and performing together with the goals of
            maximizing participation and challenging every dancer to achieve
            their best through teamwork, creativity, empathy, and discovery. The
            program culminates in a performance celebrating each child's
            success, the joy of inclusion, and the transformative power of
            dance.
          </p>
          <h3>Upcoming NB DREAM Programs</h3>
          <br />
          <h4>Below are the dates for our upcoming camps:</h4>
          <br />
          <ul>
            <li>DREAM Summer Camp: August 14 - August 18, 2023</li>
            <li>DREAM Winter Camp: February 21 - February 24, 2023</li>
          </ul>

          <h3>Gallery</h3>
          <img
            className="gallery-img"
            src="https://expressionsdanceandmovement.com/wp-content/uploads/2019/07/Darby-2a.jpg"
            alt="dance 1"
          ></img>
          <img
            className="gallery-img"
            src="https://d21zeai4l2a92w.cloudfront.net/wp-content/uploads/2023/01/SchoolofballetAz-Adaptive.jpg"
            alt="dance 2"
          ></img>
          <img
            className="gallery-img"
            src="https://media.istockphoto.com/id/1193226960/photo/kids-down-syndrome-dance-studio-class.jpg?s=612x612&w=0&k=20&c=u2LwT66J_ptDY3KwvmAqLUdnaykOolh4S6XAQoLJg8Y="
            alt="dance 3"
          />
          <img
            className="gallery-img"
            src="https://img.huffingtonpost.com/asset/5d018639210000dc18ea5247.jpeg?ops=scalefit_720_noupscale"
            alt="dance 4"
          />
          <img
            className="gallery-img"
            src="https://rtadvocacy.com/wp-content/uploads/2023/04/group-of-special-needs-girls-with-instructor-in-gym-520779162-b97b8319a0f64fbaa351e694662682af.jpg"
            alt="dance 4"
          />
          <img
            className="gallery-img"
            src="https://dance-teacher.com/wp-content/uploads/2020/12/how-teaching-children-with-special-needs-has-made-.jpg"
            alt="dance 4"
          />
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2awMrPo8vrU"
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

export default Dance;
