import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './LoginPage.css';

// Login schema
const schema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'Password must be at least 6 characters and contain at least 1 letter and 1 number.'
    ),
});

function LoginPage({ setUser, prefill = {} }) {
  const [showForgot, setShowForgot] = useState(false);
  const [forgotMsg, setForgotMsg] = useState('');
  const navigate = useNavigate();

  // Login form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: prefill.email || '',
      password: prefill.password || '',
    },
  });

  // Forgot password form
  const {
    register: registerForgot,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors }
  } = useForm({
    resolver: yupResolver(yup.object().shape({
      email: yup.string().email('Enter a valid email').required('Email is required'),
    })),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    if (prefill.email) setValue('email', prefill.email);
    if (prefill.password) setValue('password', prefill.password);
  }, [prefill, setValue]);

  const onLogin = (data) => {
    // Check if it's admin login (you can modify this logic as needed)
    if (data.email === 'admin@system' && data.password === 'admin123') {
      setUser({ isAdmin: true, email: data.email });
    } else {
      // Regular user login
      setUser({ isAdmin: false, email: data.email });
    }
    navigate('/dashboard');
  };

  const handleForgotPassword = (data) => {
    setForgotMsg(`Password reset link sent to ${data.email}`);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onLogin)}>
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
        <button type="submit">Login</button>
      </form>
      
      <p style={{ margin: '10px 0 0 0' }}>
        <span
          className="toggle-link"
          onClick={() => { setShowForgot(true); setForgotMsg(''); }}
          style={{ fontSize: '0.98rem' }}
        >
          Forgot password?
        </span>
      </p>
      
      {showForgot && (
        <form onSubmit={handleForgotSubmit(handleForgotPassword)} style={{ marginTop: 10 }}>
          <input
            type="email"
            placeholder="Enter your email"
            {...registerForgot('email')}
          />
          {forgotErrors.email && <p style={{ color: 'red', margin: 0 }}>{forgotErrors.email.message}</p>}
          <button type="submit" className="admin-login-btn" style={{ width: '100%' }}>
            Send Reset Link
          </button>
          {forgotMsg && <p style={{ color: 'green', marginTop: 8 }}>{forgotMsg}</p>}
        </form>
      )}
      
      <p>
        Don't have an account?{' '}
        <span className="toggle-link" onClick={() => navigate('/signup')}>Sign up</span>
      </p>
    </div>
  );
}

export default LoginPage;