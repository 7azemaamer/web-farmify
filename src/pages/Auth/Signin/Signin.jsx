import { Link } from "react-router-dom";
import { useState } from "react";
import constructionTruck from "../../../assets/icons/Vectors.svg";
import logo from "../../../assets/logo.svg";
import Divider from "../../../components/ui/Divider";
import GoogleButton from "../../../components/ui/GoogleButton";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-3xl font-medium text-gray-600">Sign in</h1>
          </div>

          <div className="mt-4">
            <h3 className="text-gray-600 font-medium">Hi, Welcome back 👋</h3>

            <GoogleButton text="Sign in with Google" />

            <div className="flex items-center  my-6">
              <Divider text="Or Sign in With Email" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full py-3 px-4 bg-[#588258]/20 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588258]/50"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-gray-600">Password</label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-gray-500 hover:underline text-right"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full py-3 px-4 bg-[#588258]/20 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588258]/50"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#588258] rounded-lg text-white font-medium hover:bg-[#4a7149] transition-colors"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              Not registered yet?
              <Link
                to="/signup"
                className="ml-1 text-sm font-medium text-[#588258] hover:underline"
              >
                Sign-up
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2  flex items-center justify-center p-6 md:p-8">
          <img
            src={constructionTruck}
            alt="Construction truck illustration"
            className="max-w-full h-auto max-h-60 md:max-h-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
