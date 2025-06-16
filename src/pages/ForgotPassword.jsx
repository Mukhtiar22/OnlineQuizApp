import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const emailSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const passwordSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'At least one lowercase letter')
      .matches(/[A-Z]/, 'At least one uppercase letter')
      .matches(/[0-9]/, 'At least one number')
      .matches(/[@$!%*?&]/, 'At least one special character')
      .required('New password is required'),
  });

  const handleEmailSubmit = (values, { setSubmitting, setErrors }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.email === values.email);

    if (!userExists) {
      setErrors({ email: 'No user found with this email.' });
    } else {
      setEmail(values.email);
      setStep(2);
    }

    setSubmitting(false);
  };

  const handleResetPassword = (values, { setSubmitting }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, password: values.newPassword } : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Password has been reset successfully!');
    navigate('/login');
    setSubmitting(false);
  };

  return (
    <div className="forgot-container">
      {step === 1 && (
        <Formik
          initialValues={{ email: '' }}
          validationSchema={emailSchema}
          onSubmit={handleEmailSubmit}
        >
          <Form className="forgot-form">
            <h2 className="forgot-title">Forgot Password</h2>

            <div className="forgot-form-group">
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <button type="submit" className="forgot-button">
              Verify Email
            </button>

            <p className="redirect-login">
              Back to Login? <Link to="/login">Login here</Link>
            </p>
          </Form>
        </Formik>
      )}

      {step === 2 && (
        <Formik
          initialValues={{ newPassword: '' }}
          validationSchema={passwordSchema}
          onSubmit={handleResetPassword}
        >
          <Form className="forgot-form">
            <div className="forgot-form-group">
              <label>New Password</label>
              <Field type="password" name="newPassword" />
              <ErrorMessage name="newPassword" component="div" className="error-message" />
            </div>

            <button type="submit" className="forgot-button">
              Reset Password
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
}
