import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailError] = useState("");
  const [passwordErr, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [cpasswordErr, setCpasswordError] = useState("");

  const verifyPassword = () => {
    if (password === cpassword) {
      setCpasswordError("");
    } else {
      setCpasswordError("Both passwords should be equal");
    }
  };
  const handleClick = async () => {
    if (email === "" || name === "" || password === "" || !verifyPassword) {
      setError("Some of the fields is empty.");
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://lexilab.onrender.com/api/user/signup",
        {
          name,
          email,
          password,
        }
      );
      if (response.status === 201) {
        window.location.href = "/signin";
      }
      setIsLoading(false);
    } catch (err) {
      setError("Please check your information");
      setIsLoading(false);
      console.log(err);
    }
  };
  return (
    <div className="items-center justify-center w-full h-full mt-16 lg:flex">
      <div className="p-5 mt-8 bg-white rounded-md lg:w-1/4 lg:border lg:p-16">
        <h1 className="text-2xl font-extrabold text-center underline text-blue">
          Sign Up
        </h1>
        <div className="flex flex-col ">
          <div className="m-3">
            <div className="relative">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                onBlur={() => {
                  if (name === "") {
                    setNameError("Name can not be Empty");
                  }
                }}
              />
              <label className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Name
              </label>
            </div>
            {nameErr !== "" && (
              <p
                id="outlined_success_help"
                className="mt-2 text-xs text-orange dark:text-green-400"
              >
                <span className="font-medium">Oops!</span> {nameErr}
              </p>
            )}
          </div>
          <div className="m-3">
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                onBlur={() => {
                  if (email === "") {
                    setEmailError("Email can not be Empty");
                  }
                }}
              />
              <label className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Email
              </label>
            </div>
            {emailErr !== "" && (
              <p
                id="outlined_success_help"
                className="mt-2 text-xs text-orange dark:text-green-400"
              >
                <span className="font-medium">Oops!</span> {emailErr}
              </p>
            )}
          </div>
          <div className="m-3">
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                onBlur={() => {
                  if (password === "") {
                    setPasswordError("Password can not be Empty");
                  }
                }}
              />
              <label className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Password
              </label>
            </div>
            {passwordErr !== "" && (
              <p
                id="outlined_success_help"
                className="mt-2 text-xs text-orange dark:text-green-400"
              >
                <span className="font-medium">Oops!</span> {passwordErr}
              </p>
            )}
          </div>
          <div className="m-3">
            <div className="relative">
              <input
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                onBlur={verifyPassword}
                type="text"
                className="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Confirm Password
              </label>
            </div>
            {cpasswordErr !== "" && (
              <p
                id="outlined_success_help"
                className="mt-2 text-xs text-orange dark:text-green-400"
              >
                <span className="font-medium">Oops!</span> {cpasswordErr}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center my-3 ">
            <button
              className="w-1/2 p-2 mx-auto font-bold text-white rounded bg-blue "
              onClick={handleClick}
            >
              {isLoading ? (
                <div className="w-8 h-8 m-auto border-t-2 border-blue-500 rounded-full animate-spin"></div>
              ) : (
                "SignUp"
              )}
            </button>
            {error !== "" && (
              <p
                id="outlined_success_help"
                className="mt-2 text-xs text-center text-orange"
              >
                <span className="font-medium">Oops!</span> {error}
              </p>
            )}
          </div>

          <div className="mx-3 text-sm text-center">
            Already have an account?{" "}
            <Link className="text-blue" to="/signin">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
