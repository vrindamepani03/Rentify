import "../css/SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

import { useFormik } from "formik";
import * as Yup from "yup";
import { FaMailBulk, FaUser, FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

function SignUp() {
 
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    name: Yup.string().required("Name is required"),
    phone: Yup.number().required("Phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        if (!response.ok) {
          throw new Error('Failed to sign up');
        }
        console.log('User signed up successfully');
        navigate('/login');
      } catch (error) {
        console.error('Error signing up:', error);
        setError('Failed to sign up. Please try again later.');
      }
      
    },
  });

  return (
    <>
      <div className="div">
        <div className="div-2"><a href="/">
          <img loading="lazy" src="/image/logo.png" className="img" /></a>
          <div className="div-3">
            <Link to={"/listpro"} className="div-4">List your property</Link>
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
              <div className="">
                <div className="div-10">Sign Up</div>
                <div className="div-11 flex items-center">
                  <FaUser />
                  <input
                    className="login-input"
                    placeholder="Username"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>

                {formik.touched.name && formik.errors.name ? (
                  <div className="error-message">{formik.errors.name}</div>
                ) : null}
                <div className="div-11 flex items-center">
                  <FaMailBulk />
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

                <div className="div-11 flex items-center">
                  <FaPhoneAlt />
                  <input
                    className="login-input"
                    placeholder="Phone"
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="error-message">{formik.errors.phone}</div>
                ) : null}

                <div className="div-11 flex items-center">
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
                  Sign Up Now
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
      {error && <div>{error}</div>}
    </>
  );
}

export default SignUp;
