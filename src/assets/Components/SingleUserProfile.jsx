import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleUserProfile = () => {
  //Giving a loading text until the mockAPI fetch data
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  //using useNavigate hook to navigate between one component to another component
  const navigate = useNavigate();

  //using useParams hook to get the userID and fetch the single user
  const param = useParams();

  //updating the single user data using useState
  const [singleUserData, setSingleUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  //fetching the single user data using axios get method
  const fetchData = async () => {
    await axios
      .get(
        `https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData/${parseInt(
          param.id
        )}`
      )
      .then((res) => setSingleUserData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container h-100 py-5">
        <div className="row h-100 d-flex justify-content-center align-items-center">
          <div className="col-12 text-center">
            {loading ? (
              <div className="py-5 text-light">Loading...</div>
            ) : (
              <div className="card h-100">
                <div className="row mx-0">
                  <div className="col-md-12 col-lg-4 p-3">
                    <img
                      src="../Images/dummy_profile_img.jpg"
                      className="img-fluid rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-12 col-lg-8">
                    <div className="card-body">
                      <h3 className="card-title mb-3 bg-info py-1">
                        Personal Info
                      </h3>
                      <p className="card-text mb-2">
                        <b>Name : </b> {singleUserData.name}
                      </p>
                      <p className="card-text mb-2">
                        <b>User Name : </b> {singleUserData.userName}
                      </p>
                      <p className="card-text mb-2">
                        <b>Email ID : </b> {singleUserData.email}
                      </p>
                      <p className="card-text mb-2">
                        <b>Phone Number : </b> {singleUserData.phoneNumber}
                      </p>
                      <p className="card-text mb-2">
                        <b>Address : </b> {singleUserData.addressDoorNo},{" "}
                        {singleUserData.addressStreet},
                        {singleUserData.addressCity},{" "}
                        {singleUserData.addressState}
                      </p>
                      <p className="card-text mb-2">
                        <b>Zipcode : </b> {singleUserData.addressZipCode}
                      </p>
                      <p className="card-text mb-2">
                        <b>Website : </b> {singleUserData.website}
                      </p>
                      <p className="card-text mb-2">
                        <b>Company Name : </b> {singleUserData.companyName}
                      </p>
                      <p className="card-text mb-2">
                        <b>Company Description : </b>{" "}
                        {singleUserData.companyDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className="btn btn-warning mt-5"
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

export default SingleUserProfile;
