import { React, useState } from "react";
import profile from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthstore } from "./Context/useAuthstore,";

function Login() {
  const { login } = useAuthstore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const oldUser = {
        useremail: email,
        userpass: pass
      };

      await login(oldUser, navigate);
      
    } catch (error) {
      console.log("error in log", error);
    }
  };

  return (
    <>
      <div>
        <svg
          style={{ backgroundColor: "#e7008a" }}
          className="absolute w-[100%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,288L34.3,250.7C68.6,213,137,139,206,96C274.3,53,343,43,411,85.3C480,128,549,224,617,234.7C685.7,245,754,171,823,165.3C891.4,160,960,224,1029,213.3C1097.1,203,1166,117,1234,80C1302.9,43,1371,53,1406,58.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="xl:w-[700px] px-10 h-[450px] pt-[90px] rounded-3xl xl:shadow-xl">
          <h1 className="text-center text-3xl font-bold mt-2 mb-2 z-30 relative top-[20px] left-[100px]">
            Login
          </h1>

          <div className="flex justify-center mt-10">
            <form
              onSubmit={(e) => {
                handelLogin(e);
              }}
              className="z-30 "
              action
            >
              <input
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                name
                id
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
                placeholder="Enter your email"
              />

              <br />
              <br />
              <input
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                type="text"
                name
                id
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
                placeholder="Enter your password"
              />
              <div className="flex justify-end mt-3 mb-4">
                <a href="#" className="text-blue-700">
                  Forgot password
                </a>
              </div>

              <button
                type="submit"
                className="py-3 bg-indigo-400 text-white w-full rounded-md font-bold"
              >
                Login
              </button>
              <div className="w-full flex justify-center items-center pt-[30px] gap-[5px] text-blue-500">
                <div>Dont have an account?</div>
                <Link to={"/signup"}>Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
