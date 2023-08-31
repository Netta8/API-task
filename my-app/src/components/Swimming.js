import React, { useState } from "react";

const Swimming = () => {
  const [availablePlaces, setAvailablePlaces] = useState(1);
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
          <h3>register to our Swimming program now!</h3>
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
            src="https://www.toronto.ca/wp-content/uploads/2017/11/96bd-swim-banner.jpg"
            alt="top swimming course"
          ></img>
          <h1>Swimming Course</h1>
          <p>
            Swimming pools are fun for children of all ages, but they can be a
            bit of a challenge for children with special needs. If you have a
            child with a disability, you may need to spend extra time teaching
            your child how to be safe in the pool. It's important for children
            of all abilities to develop water safety skills as early as
            possible. Swimming is full of advantages, but for children with
            special needs, it offers three primary benefits:
          </p>
          <h3>PHYSICAL BENEFITS</h3>
          <p>
            Swimming is one of the best full-body workouts for children of all
            ages and skill levels, especially those with special needs. Learning
            to swim improves balance, coordination and the development of motor
            skills, while water resistance builds muscle tone and strength.
            Additionally, floating and propelling through the water isolates
            muscle groups and develops coordination. Swimming also improves
            range of motion for those with movement restrictions. Because
            buoyancy in the water reduces body weight by 80%, swimming offers an
            ideal environment for movement with less restriction.
          </p>
          <h3>EMOTIONAL BENEFITS </h3>
          <p>
            The look on a child's face when they accomplish a goal or achieve a
            new skill is priceless, and swimming provides plenty of
            opportunities to build self-confidence. As children learn new
            skills, their confidence grows, and they are often inspired to
            explore new skills they wouldn't have tried before.
          </p>
          <p>
            Additionally, swim lessons are designed with progression in mind,
            and one of our benefits is to get children with special needs
            comfortable in a cohesive social environment. Progression continues
            to develop as they interact with their swim instructor and others in
            the school.
          </p>
          <h3>SAFETY BENEFITS </h3>
          <p>
            According to the National Autism Association, drowning is a leading
            cause of death for children with autism. This reality is due to
            three common autistic characteristics: wandering, fascination with
            the water, and a lack of understanding of danger. As a whole,
            children with special needs are at an increased risk of drowning and
            establishing water safety skills is one of the best ways to protect
            them. As with all children, this could mean the difference between
            life and death if they find themselves accidentally in the water.
          </p>
          <h2>who will be your teachers?</h2>
          <div className="teacher-img-container">
            <img
              className="teacher-img"
              src="https://irp-cdn.multiscreensite.com/27d7a4cc/dms3rep/multi/swimability-1-410x280.png"
              alt="Dance teacher1"
            ></img>
            <img
              className="teacher-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRko6K924FZDffMJ_8buZHWyTv6D_dA6RMwRw&usqp=CAU"
              alt="Dance teacher2"
            ></img>
            <img
              className="teacher-img"
              src="https://www.dcsportsclub.co.uk/wp-content/uploads/2014/10/dulwich-sports-07.08.14_5460-630x419.jpg"
              alt="Dance teacher2"
            ></img>
          </div>
          <p>
            NB swimming team have lots of swimming success stories with both
            adults and children with SEND, we have clients who have achieved
            marvelous results often exceeding the ability of the average person.
            We have experience of teaching individuals with cerebral palsy,
            downs syndrome, muscular dystrophy, multiple sclerosis, dwarfism,
            partial paralysis, hearing and sight impaired, amputees and
            epilepsy. With a little patience and understanding there is no
            reason that living with a disability should be an obstacle to
            swimming. Whilst perfect stroke technique is often unachievable
            successful swimming and water confidence is a realistic outcome for
            most pupils. The freedom of movement, weightlessness and support
            offered by the water is often liberating, empowering and immensely
            enjoyable as well as providing exercise and fitness benefits. We
            have an adapted version of our badge scheme that monitors and
            rewards the progress of each individual providing an added incentive
            and sense of achievemen
          </p>
          <p>
            Swim lessons also help special needs children develop spatial
            awareness as they use reference points and explore water depth. This
            increased spatial awareness, along with the physical balance that
            naturally develops during swimming, can keep special needs children
            from falling into the water, offering additional safety in and
            around the water.
          </p>
          <p>
            Our program is designed to create lessons tailored to each child's
            special needs and abilities, and we're committed to helping children
            of all abilities develop a life-long love of the water. To learn
            more about this program and what your local school offers, please
            contact your neighborhood Aqua-Tots.
          </p>

          <h3>Gallery</h3>
          <img
            className="gallery-img"
            src="https://d1s9j44aio5gjs.cloudfront.net/2017/03/Becoming_Swimming_Teacher.jpg"
            alt="swimming 1"
          ></img>
          <img
            className="gallery-img"
            src="https://aquastarswim.com.au/app/uploads/2019/11/how-swimming-can-help-children-with-special-needs.jpg"
            alt="swimming 2"
          ></img>
          <img
            className="gallery-img"
            src="https://images.sunsationalswimschool.com/blog/adaptive_swimming_techniques_for_kids_with_special_needs/special-needs-swimming-lessons.jpg"
            alt="swimming 3"
          ></img>
          <img
            className="gallery-img"
            src="https://www.safesplash.com/hubfs/WATER%20SAFETY%20MONTH%20%281%29.png"
            alt="swimming 4"
          ></img>
          <img
            className="gallery-img"
            src="https://static.wixstatic.com/media/699b6f_5d88a5a4c71b404b9268942e77ede995~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/699b6f_5d88a5a4c71b404b9268942e77ede995~mv2.jpg"
            alt="swimming 5"
          ></img>
          <img
            className="gallery-img"
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/12680/075fe1d5-d03e-41a7-805d-b27b55aa5556.jpg"
            alt="swimming 6"
          ></img>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SXX3LR3ynTY"
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

export default Swimming;
