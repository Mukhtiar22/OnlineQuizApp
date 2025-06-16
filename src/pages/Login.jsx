import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  const handleLogin = (values, { setSubmitting, setFieldError }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === values.email &&
        user.password === values.password
    );

    if (matchedUser) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      navigate('/');
    } else {
      setFieldError('password', '❌ Invalid email or password');
    }

    setSubmitting(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="login-links">
              <Link to="/forgot-password">Forgot Password?</Link> |{' '}
              <Link to="/signup">Sign Up</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
