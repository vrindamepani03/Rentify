import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";// Import useHistory from react-router-dom
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';

function LogIn() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/api/login', values);
        console.log("Login successful:", response.data);
        navigate('/');
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle login failure, display error message, etc.
      }

      
    },
  });

  return (
    <>
      <div className="div">
        <div className="div-2"><a href="/">
          <img loading="lazy" src="/image/logo.png" className="img" /></a>
          <div className="div-3">
            <Link to={"/listpro"}>List your property</Link>
            <Link to={"/signUp"}>Sign Up</Link>
            <Link to={"/login"} className="div-6">
              Login
            </Link>
          </div>
        </div>
        <div className="div-7">
          <div className="div-8">
            <div className="column">
              <img loading="lazy" src="/image/img_1.jpg" className="img-2" />
            </div>
            <form onSubmit={formik.handleSubmit} className="column-2">
              <div className="div-9">
                <div className="div-10">Login</div>
                <div className="div-11 flex items-center">
                  <FaUser />
                  <input
                    className="login-input"
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
                <div className="div-13 flex items-center">
                  <RiLockPasswordLine />
                  <input
                    className="login-input"
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error-message">{formik.errors.password}</div>
                ) : null}
                <button type="submit" className="div-15">
                  Login Now
                </button>
                <div className="div-16">
                  <span
                    style={{ fontWeight: 700, color: "rgba(28, 28, 28, 1)" }}
                  >
                  
                  </span>
                 
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
