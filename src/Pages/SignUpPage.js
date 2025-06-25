import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SignUpPage.css';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  mobile: yup
    .string()
    .required('Mobile Number is required')
    .matches(/^[0-9]{10}$/, 'Mobile Number must be 10 digits'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'Password must be at least 6 characters and contain at least 1 letter and 1 number.'
    ),
});

function SignUpPage({ setLoginPrefill }) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      mobile: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    setLoginPrefill({ email: data.email, password: data.password });
    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="form-container">
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register('fullName')}
        />
        {errors.fullName && <p style={{ color: 'red', margin: 0 }}>{errors.fullName.message}</p>}
        <input
          type="tel"
          placeholder="Mobile Number"
          {...register('mobile')}
          maxLength={10}
        />
        {errors.mobile && <p style={{ color: 'red', margin: 0 }}>{errors.mobile.message}</p>}
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        {errors.password && <p style={{ color: 'red', margin: 0 }}>{errors.password.message}</p>}
        <button type="submit">Signup</button>
      </form>
      {success && <p style={{ color: 'green' }}>Signup successful! Redirecting to login...</p>}
      <p>
        Already have an account?{' '}
        <span className="toggle-link" onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
}

export default SignUpPage;