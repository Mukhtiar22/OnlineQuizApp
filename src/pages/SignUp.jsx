import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

export default function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain letters')
      .matches(/[0-9]/, 'Password must contain numbers')
      .matches(/[@$!%*#?&]/, 'Password must contain a symbol'),
    dob: Yup.string()
      .required('Date of birth is required'),
  });

  const handleSubmit = (values) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = existingUsers.some(
      (user) => user.email === values.email
    );

    if (emailExists) {
      alert("Email is already registered. Please use a different one.");
      return;
    }

    existingUsers.push(values);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert(`Welcome, ${values.firstName}!`);
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="signup-form">
          <h2 className="signup-title">Create Account</h2>

          <div className="form-group">
            <label>First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <Field type="date" name="dob" />
            <ErrorMessage name="dob" component="div" className="error" />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <p className="redirect-login">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
