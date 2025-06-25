import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './LoginPage.css';

// Yup validation schema
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
  const [showAdmin, setShowAdmin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotMsg, setForgotMsg] = useState('');
  const navigate = useNavigate();


  
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

  useEffect(() => {
    if (prefill.email) setValue('email', prefill.email);
    if (prefill.password) setValue('password', prefill.password);
  }, [prefill, setValue]);

  const onUserLogin = (data) => {
    setUser({ isAdmin: false, email: data.email });
    navigate('/user-dashboard');
  };

  const handleAdminLogin = () => {
    setUser({ isAdmin: true, email: "admin@system" });
    navigate('/admin-dashboard');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]')?.value;
    if (email) {
      setForgotMsg(`Password reset link sent to ${email}`);
    } else {
      setForgotMsg('Please enter your email above.');
    }
  };

  return (
    <div className="form-container">
      <div className="login-toggle-group">
        <button
          className={`login-toggle-btn${!showAdmin ? ' active' : ''}`}
          onClick={() => { setShowAdmin(false); setShowForgot(false); setForgotMsg(''); }}
          type="button"
        >
          User Login
        </button>
        <button
          className={`login-toggle-btn${showAdmin ? ' active' : ''}`}
          onClick={() => { setShowAdmin(true); setShowForgot(false); setForgotMsg(''); }}
          type="button"
        >
          Admin Login
        </button>
      </div>
      {showAdmin ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Admin Login</h2>
          <button onClick={handleAdminLogin} className="admin-login-btn">Login as Admin</button>
        </div>
      ) : (
        <>
          <h2>User Login</h2>
          <form onSubmit={handleSubmit(onUserLogin)}>
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
            <form onSubmit={handleForgotPassword} style={{ marginTop: 10 }}>
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
        </>
      )}
    </div>
  );
}

export default LoginPage;