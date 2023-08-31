import React, { useState } from "react";
import "./Contact-form.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    age: "3-5",
    numberOfChildren: "1",
    location: "",
    zipCode: "",
    preferredLanguage: "English",
    moreDetails: "",
    preferredDays: [],
    preferredTimes: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevFormData) => {
      if (checked) {
        return { ...prevFormData, [name]: [...prevFormData[name], value] };
      } else {
        return {
          ...prevFormData,
          [name]: prevFormData[name].filter((item) => item !== value),
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    alert(
      "Thank you for applying to NB special needs Center Berlin!\nWe will contact you as soon as possible."
    );

    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      age: "3-5",
      numberOfChildren: "1",
      location: "",
      zipCode: "",
      preferredLanguage: "English",
      moreDetails: "",
      preferredDays: [],
      preferredTimes: [],
    });
  };

  return (
    <div className="form-container">
      <div className="contact-form">
        <h3 className="TEXT">GET IN TOUCH</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-first-section">
            <label>
              <h4>Name:</h4>
              <input
                className="name"
                type="text"
                name="name"
                placeholder="First and Last Name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              <h4> Email:</h4>
              <input
                className="email"
                type="email"
                name="email"
                placeholder="✉️"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <h4>Contact Number:</h4>
              <input
                className="tel"
                type="tel"
                name="contactNumber"
                placeholder="📞"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              <h4>Child age:</h4>
              <select name="age" value={formData.age} onChange={handleChange}>
                <option value="3-5">3-5</option>
                <option value="6-8">6-8</option>
                <option value="9-13">9-13</option>
                <option value="older than 14">Older than 14</option>
              </select>
            </label>
          </div>

          <label>
            <h4>Number of Children:</h4>
            <select
              name="numberOfChildren"
              value={formData.numberOfChildren}
              onChange={handleChange}
            >
              <option value="1" defaultValue>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <br />

          <label>
            <h4>Location:</h4>
            <input
              className="location"
              type="text"
              name="location"
              placeholder="city"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            <h4>Zip/Postal Code:</h4>
            <input
              className="zip"
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            <h4>Preferred Language:</h4>
            <select
              name="preferredLanguage"
              value={formData.zipCode}
              onChange={handleChange}
            >
              <option value="English">English</option>
              <option value="Deutsch">Deutsch</option>
            </select>
          </label>

          <hr />
          <br />
          <label>
            <h4>Preferred Day(s):</h4>
            <br />
            <input
              type="checkbox"
              name="preferredDays"
              value="Monday"
              checked={formData.preferredDays.includes("Monday")}
              onChange={handleCheckboxChange}
            />
            Monday
            <br />
            <input
              type="checkbox"
              name="preferredDays"
              value="Tuesday"
              checked={formData.preferredDays.includes("Tuesday")}
              onChange={handleCheckboxChange}
            />
            Tuesday
            <br />
            <input
              type="checkbox"
              name="preferredDays"
              value="Wednesday"
              checked={formData.preferredDays.includes("Wednesday")}
              onChange={handleCheckboxChange}
            />
            Wednesday
            <br />
            <input
              type="checkbox"
              name="preferredDays"
              value="Thursday"
              checked={formData.preferredDays.includes("Thursday")}
              onChange={handleCheckboxChange}
            />
            Thursday
            <br />
            <input
              type="checkbox"
              name="preferredDays"
              value="Friday"
              checked={formData.preferredDays.includes("Friday")}
              onChange={handleCheckboxChange}
            />
            Friday
            <br />
            <input
              type="checkbox"
              name="preferredDays"
              value="Saturday"
              checked={formData.preferredDays.includes("Saturday")}
              onChange={handleCheckboxChange}
            />
            Saturday
            <br />
            <input
              type="checkbox"
              name="preferredDays"
              value="Sunday"
              checked={formData.preferredDays.includes("Sunday")}
              onChange={handleCheckboxChange}
            />
            Sunday
          </label>
          <br />
          <hr />
          <br />

          <label>
            <h4>Preferred Time(s):</h4>
            <br />
            <input
              type="checkbox"
              name="preferredTimes"
              value="7am-9am"
              checked={formData.preferredTimes.includes("7am-9am")}
              onChange={handleCheckboxChange}
            />
            7am-9am
            <br />
            <input
              type="checkbox"
              name="preferredTimes"
              value="9am-11am"
              checked={formData.preferredTimes.includes("9am-11am")}
              onChange={handleCheckboxChange}
            />
            9am-11am
            <br />
            <input
              type="checkbox"
              name="preferredTimes"
              value="11am-1pm"
              checked={formData.preferredTimes.includes("11am-1pm")}
              onChange={handleCheckboxChange}
            />
            11am-1pm
            <br />
            <input
              type="checkbox"
              name="preferredTimes"
              value="1pm-3pm"
              checked={formData.preferredTimes.includes("1pm-3pm")}
              onChange={handleCheckboxChange}
            />
            1pm-3pm
            <br />
            <input
              type="checkbox"
              name="preferredTimes"
              value="3pm-5pm"
              checked={formData.preferredTimes.includes("3pm-5pm")}
              onChange={handleCheckboxChange}
            />
            3pm-5pm
            <br />
            <input
              type="checkbox"
              name="preferredTimes"
              value="5pm-7pm"
              checked={formData.preferredTimes.includes("5pm-7pm")}
              onChange={handleCheckboxChange}
            />
            5pm-7pm
            <br />
            <input
              type="checkbox"
              name="preferredTimes"
              value="7pm-9pm"
              checked={formData.preferredTimes.includes("7pm-9pm")}
              onChange={handleCheckboxChange}
            />
            7pm-9pm
          </label>
          <br />
          <hr />
          <br />
          <label>
            <h4>More Details:</h4>
            <textarea
              name="moreDetails"
              placeholder="We would love to have more information about your child"
              rows="10"
              cols="50"
              value={formData.moreDetails}
              onChange={handleChange}
            ></textarea>
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
