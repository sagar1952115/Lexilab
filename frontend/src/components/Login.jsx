import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailError] = useState("");
  const [passwordErr, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      setError("Some of the fields are empty");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post("/api/user/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response));
        window.location.href = "/";
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  return (
    <div className="items-center justify-center w-full h-full mt-16 lg:flex">
      <div className="p-5 mt-8 bg-white rounded-md lg:w-1/4 lg:border lg:p-16">
        <h1 className="text-2xl font-extrabold text-center underline text-blue">
          Login
        </h1>
        <div className="flex flex-col ">
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

          <div className="flex flex-col items-center my-3 ">
            <button
              className="w-1/2 p-2 mx-auto font-bold text-white rounded bg-blue "
              onClick={handleSubmit}
            >
              {isLoading ? (
                <div className="w-8 h-8 m-auto border-t-2 border-blue-500 rounded-full animate-spin"></div>
              ) : (
                "SignIn"
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
            Don't have an account?{" "}
            <Link className="text-blue" to="/signup">
              SignUp here
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <input
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Enter email here"
    //     type="text"
    //   />
    //   <input
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="Enter password"
    //     type="password"
    //   />
    //   <button onClick={handleSubmit}>SignIn</button>
    // </div>
  );
};

export default Login;
