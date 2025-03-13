import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Suhitha",
    lastName: "S M",
    email: "suhitha@gmail.com",
    phone: "477-046-1827",
    gender: "Female",
    language: "English",
    dob: "1990-09-30",
    address: "116 Jaskolski Stravenue Suite 883",
    country: "India",
    state: "Tamil Nadu",
    cityCode: "",
    postalCode: "",
    paymentMethods: [
      { type: "Visa", details: "**** 8314", expiry: "06/29" },
      { type: "MasterCard", details: "**** 8314", expiry: "01/30" },
    ],
    profileImage: "https://via.placeholder.com/120",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved Data:", formData);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, profileImage: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image">
          <label htmlFor="profileImageInput">
            <img
              src={formData.profileImage}
              alt="Profile"
              className="profile-img-circle"
            />
          </label>
          {isEditing && (
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          )}
        </div>
        <h1>{formData.firstName + " " + formData.lastName}</h1>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h3>Personal Details</h3>
          <div className="row">
            <div className="column">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="column">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="column">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="column">
              <label>Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Address Details</h3>
          <div className="row">
            <div className="column">
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Colombia">Colombia</option>
              </select>
            </div>
            <div className="column">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>City </label>
              <input
                type="text"
                name="cityCode"
                value={formData.cityCode}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="column">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Payment Details</h3>
          {formData.paymentMethods.map((method, index) => (
            <div key={index} className="payment-method">
              <span>{method.type}</span>
              <span>{method.details}</span>
              <span>{method.expiry}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Update</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
