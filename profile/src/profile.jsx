import React, { useState } from 'react';
import './profile.css';
import './sidebar.css';

const UserProfile = () => {
  const initialProfileData = {
    name: 'Aayush Kumar Singh',
    email: 'anugrahtoby@gmail.com',
    age: 20,
    gender: 'Male',
    password: 'abcde',
    registerNumber: '21BCE1942',
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="profile">
      <div className="main-title">Cobalt.</div>
      <div className="info-display">
        <div className="pic"></div>
        <div className="name-main">{profileData.name}</div>
        <div className="regno">{profileData.registerNumber}</div>
        <div className="primary-button" onClick={isEditing ? handleSaveClick : handleEditClick}>
          <div className="button-text">
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </div>
        </div>
      </div>
      <div className="edit-area">
        <div className="title">My Profile</div>
        <div className="subtitle">Personal Information</div>
        <div className="name-edit">
          <div className="name">Name:</div>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
            />
          ) : (
            <div className="name-text">{profileData.name}</div>
          )}
        </div>
        <div className="mail-edit">
          <div className="e-mail">E-mail:</div>
          {isEditing ? (
            <input
              type="text"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
          ) : (
            <div className="mail-text">{profileData.email}</div>
          )}
        </div>
        <div className="age-edit">
          <div className="age">Age:</div>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={profileData.age}
              onChange={handleChange}
            />
          ) : (
            <div className="age-text">{profileData.age}</div>
          )}
        </div>
        <div className="gender-edit">
          <div className="gender">Gender:</div>
          {isEditing ? (
            <input
              type="text"
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
            />
          ) : (
            <div className="gender-text">{profileData.gender}</div>
          )}
        </div>
        <div className="password-edit">
          <div className="password">Password:</div>
          {isEditing ? (
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={profileData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="show-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'} Password
              </button>
            </div>
          ) : (
            <div className="masked-password">{'*'.repeat(profileData.password.length)}</div>
          )}
        </div>
      </div>
      <div className="sidebar">
        <div className="hamburger">
          <svg
            class="vector"
            width="34"
            height="24"
            viewBox="0 0 34 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.05884 23.4483C1.52759 23.4483 1.08197 23.2683 0.721969 22.9083C0.361969 22.5483 0.182594 22.1033 0.183844 21.5732C0.183844 21.042 0.363845 20.5964 0.723845 20.2364C1.08384 19.8764 1.52884 19.697 2.05884 19.6982H32.0588C32.5901 19.6982 33.0357 19.8783 33.3957 20.2383C33.7557 20.5983 33.9351 21.0433 33.9338 21.5732C33.9338 22.1045 33.7538 22.5501 33.3938 22.9101C33.0338 23.2701 32.5888 23.4495 32.0588 23.4483H2.05884ZM2.05884 14.0732C1.52759 14.0732 1.08197 13.8932 0.721969 13.5332C0.361969 13.1732 0.182594 12.7282 0.183844 12.1982C0.183844 11.667 0.363845 11.2214 0.723845 10.8614C1.08384 10.5014 1.52884 10.322 2.05884 10.3232H32.0588C32.5901 10.3232 33.0357 10.5032 33.3957 10.8632C33.7557 11.2232 33.9351 11.6682 33.9338 12.1982C33.9338 12.7295 33.7538 13.1751 33.3938 13.5351C33.0338 13.8951 32.5888 14.0745 32.0588 14.0732H2.05884ZM2.05884 4.69825C1.52759 4.69825 1.08197 4.51825 0.721969 4.15825C0.361969 3.79825 0.182594 3.35325 0.183844 2.82325C0.183844 2.292 0.363845 1.84637 0.723845 1.48637C1.08384 1.12637 1.52884 0.946999 2.05884 0.948249H32.0588C32.5901 0.948249 33.0357 1.12825 33.3957 1.48825C33.7557 1.84825 33.9351 2.29325 33.9338 2.82325C33.9338 3.3545 33.7538 3.80012 33.3938 4.16012C33.0338 4.52012 32.5888 4.6995 32.0588 4.69825H2.05884Z"
              fill="white"
            />
          </svg>
        </div>
        <div className='dashboard'>
          <svg
            class="vector"
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.93384 34.1982C2.90259 34.1982 2.01947 33.8307 1.28447 33.0957C0.549466 32.3607 0.182591 31.4782 0.183841 30.4482V4.19825C0.183841 3.167 0.551341 2.28387 1.28634 1.54887C2.02134 0.81387 2.90384 0.446995 3.93384 0.448245H30.1838C31.2151 0.448245 32.0982 0.815745 32.8332 1.55075C33.5682 2.28575 33.9351 3.16825 33.9338 4.19825V30.4482C33.9338 31.4795 33.5663 32.3626 32.8313 33.0976C32.0963 33.8326 31.2138 34.1995 30.1838 34.1982H3.93384ZM3.93384 30.4482H15.1838V4.19825H3.93384V30.4482ZM18.9338 30.4482H30.1838V17.3232H18.9338V30.4482ZM18.9338 13.5732H30.1838V4.19825H18.9338V13.5732Z"
              fill="#2C68F3"
            />
          </svg>
        </div>
        <div className='tests'>
          <svg
            class="vector"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.69421 33.9689V13.297C9.69421 12.2657 10.0692 11.3907 10.8192 10.672C11.5692 9.95324 12.4598 9.59387 13.4911 9.59387H34.0692C35.1005 9.59387 35.9836 9.96074 36.7186 10.6945C37.4536 11.4282 37.8205 12.3114 37.8192 13.3439V28.3439L28.4442 37.7189H13.4442C12.413 37.7189 11.5298 37.3514 10.7948 36.6164C10.0598 35.8814 9.69296 34.9989 9.69421 33.9689ZM0.366084 8.18762C0.178584 7.15637 0.381709 6.22637 0.975459 5.39762C1.56921 4.56887 2.38171 4.06137 3.41296 3.87512L23.7567 0.265742C24.788 0.0782422 25.718 0.281367 26.5467 0.875117C27.3755 1.46887 27.883 2.28137 28.0692 3.31262L28.538 5.84387H24.6942L24.3661 3.96887L4.06921 7.57824L5.94421 18.172V31.2501C5.44421 30.9689 5.01483 30.5939 4.65608 30.1251C4.29733 29.6564 4.07046 29.1251 3.97546 28.5314L0.366084 8.18762ZM13.4442 13.3439V33.9689H26.5692V28.3439C26.5692 27.8126 26.7492 27.367 27.1092 27.007C27.4692 26.647 27.9142 26.4676 28.4442 26.4689H34.0692V13.3439H13.4442Z"
              fill="#7D7D7D"
            />
          </svg>
        </div>
        <div className='courses'>
          <svg
            class="vector"
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3088 23.2188H22.8088V19.4688H15.3088V23.2188ZM15.3088 17.5938H30.3088V13.8438H15.3088V17.5938ZM15.3088 11.9688H30.3088V8.21875H15.3088V11.9688ZM11.5588 30.7188C10.5276 30.7188 9.64447 30.3513 8.90947 29.6163C8.17447 28.8813 7.80759 27.9988 7.80884 26.9688V4.46875C7.80884 3.4375 8.17634 2.55438 8.91134 1.81938C9.64634 1.08438 10.5288 0.717503 11.5588 0.718753H34.0588C35.0901 0.718753 35.9732 1.08625 36.7082 1.82125C37.4432 2.55625 37.8101 3.43875 37.8088 4.46875V26.9688C37.8088 28 37.4413 28.8831 36.7063 29.6181C35.9713 30.3531 35.0888 30.72 34.0588 30.7188H11.5588ZM11.5588 26.9688H34.0588V4.46875H11.5588V26.9688ZM4.05884 38.2188C3.02759 38.2188 2.14447 37.8513 1.40947 37.1163C0.674466 36.3813 0.307591 35.4988 0.308841 34.4688V8.21875H4.05884V34.4688H30.3088V38.2188H4.05884Z"
              fill="#7D7D7D"
            />
          </svg>
        </div>
        <div className='sidebar-icon'></div>
      </div>
    </div>
  );
};

export default UserProfile;
