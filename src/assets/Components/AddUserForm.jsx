import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  //using useNavigate hook to navigate between one component to another component
  const navigate = useNavigate();

  //using useState hook to update the date
  const [data, setData] = useState({
    name: "",
    userName: "",
    email: "",
    phoneNumber: "",
    addressDoorNo: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressZipCode: "",
    website: "",
    companyName: "",
    companyDescription: "",
  });

  //updating values while user entering input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preData) => ({
      ...preData,
      [name]: value,
    }));
    //console.log(data);
  };

  //adding the newly created data to axios method called post
  const handleCreate = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData`, data)
      .then((res) => {
        // console.log(res);
        alert(`New User Data Created Successfully !`);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={handleCreate} className="bg-info my-3 py-3 px-5">
            <h1 className="text-center">Create User Form</h1>
            <div className="row">
              <div className="mb-3 col-sm-12 col-lg-6">
                <label htmlFor="Name" className="form-label">
                  <b>Name : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="Name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="e.g Vijay Sundaram"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-6">
                <label htmlFor="UserName" className="form-label">
                  <b>User Name : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  id="UserName"
                  value={data.userName}
                  onChange={handleChange}
                  placeholder="e.g Mayhul"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-6">
                <label htmlFor="emailId" className="form-label">
                  <b>Email ID : </b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="emailId"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="e.g sample@gmail.com"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-6">
                <label htmlFor="phoneNo" className="form-label">
                  <b>Phone Number : </b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phoneNumber"
                  id="phoneNo"
                  value={data.phoneNumber}
                  onChange={handleChange}
                  placeholder="e.g 3847834567"
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <b>Address : </b>
              </div>
              <div className="mb-3 col-sm-12 col-lg-4">
                <label htmlFor="doorNo" className="form-label">
                  <b>Door No : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="addressDoorNo"
                  id="doorNo"
                  onChange={handleChange}
                  value={data.addressDoorNo}
                  placeholder="e.g Apt/Suite 233"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-8">
                <label htmlFor="street" className="form-label">
                  <b>Street : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="addressStreet"
                  id="street"
                  value={data.addressStreet}
                  onChange={handleChange}
                  placeholder="e.g Ganapathy Street"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-5">
                <label htmlFor="city" className="form-label">
                  <b>City : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="addressCity"
                  id="city"
                  value={data.addressCity}
                  onChange={handleChange}
                  placeholder="e.g Salem"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-4">
                <label htmlFor="state" className="form-label">
                  <b>State : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="addressState"
                  id="state"
                  value={data.addressState}
                  onChange={handleChange}
                  placeholder="e.g Tamilnadu"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-3">
                <label htmlFor="zipcode" className="form-label">
                  <b>Zipcode : </b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="addressZipCode"
                  id="zipcode"
                  value={data.addressZipCode}
                  onChange={handleChange}
                  placeholder="e.g 636001"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-6">
                <label htmlFor="Website" className="form-label">
                  <b>Website : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="website"
                  id="Website"
                  value={data.website}
                  onChange={handleChange}
                  placeholder="e.g www.guvi.in"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-lg-6">
                <label htmlFor="CompanyName" className="form-label">
                  <b>Company Name : </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  id="CompanyName"
                  onChange={handleChange}
                  value={data.companyName}
                  placeholder="e.g Kekran Mekran Company"
                  required
                />
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="CompanyDescription" className="form-label">
                  <b>Company Description : </b>
                </label>
                <textarea
                  className="form-control"
                  name="companyDescription"
                  id="CompanyDescription"
                  value={data.companyDescription}
                  onChange={handleChange}
                  placeholder="e.g Software Industry..."
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success w-50 mx-2">
                  Create User
                </button>
              </div>
            </div>
          </form>
          <div className="d-flex justify-content-center">
            <button
              className="btn text-center btn-warning w-50 my-3"
              onClick={() => navigate("/")}
            >
              Go Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
