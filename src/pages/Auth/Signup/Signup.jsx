import { Link } from "react-router-dom";
import { useState } from "react";
import constructionTruck from "../../../assets/icons/signup.svg";
import logo from "../../../assets/logo.svg";
import Divider from "../../../components/ui/Divider";
import GoogleButton from "../../../components/ui/GoogleButton";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Required";
    if (!formData.country.trim()) newErrors.country = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.password) newErrors.password = "Required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don't match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
    }, 1000);
  };

  const renderField = (name, label, type = "text", placeholder, className) => (
    <div className="w-full">
      <label className="block text-gray-600 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder || `Enter your ${name.toLowerCase()}`}
        value={formData[name]}
        onChange={handleChange}
        className={`${className} w-full py-3 px-4 bg-[#588258]/20 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588258]/50 ${
          errors[name] ? "ring-2 ring-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-3xl font-medium text-gray-600">Sign up</h1>
          </div>

          <div className="mt-4">
            <h3 className="text-gray-600 font-medium">
              Create your account 👋
            </h3>

            <div className="mt-6">
              <GoogleButton text="Sign up with Google" />
            </div>

            <div className="flex items-center my-6">
              <Divider text="Or Sign up With Email" />
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                {renderField("fullName", "Full Name")}
                <div className="flex justify-between gap-2">
                  {renderField("phoneNumber", "Phone Number", "tel")}
                  {renderField("country", "Country", "text", "Country")}
                </div>
                {renderField("email", "Email", "email")}
                {renderField("password", "Password", "password")}
                {renderField(
                  "confirmPassword",
                  "Confirm Password",
                  "password",
                  "Confirm your password"
                )}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#588258] rounded-lg text-white font-medium hover:bg-[#4a7149] transition-colors"
                >
                  {isSubmitting ? "Creating..." : "Sign up"}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              Already have an account?
              <Link
                to="/signin"
                className="ml-1 text-sm font-medium text-[#588258] hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
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

export default Signup;
