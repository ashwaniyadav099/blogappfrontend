import React from 'react';
import { useForm } from 'react-hook-form';
import signupcall from '../Apicall/Apicall'
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log('Form Data:', data);
    signupcall(data)
  };

  // Watch password for confirm password validation
  const password = watch('password', '');

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        {/* Phone Number */}
        <div style={{ marginBottom: '10px' }}>
          <label>Phone Number:</label>
          <input
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits',
              },
            })}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </div>

        {/* Password */}
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: '10px' }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) => value === password || 'Passwords do not match',
            })}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
          {errors.confirmPassword && (
            <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* User Image */}
        <div style={{ marginBottom: '10px' }}>
          <label>Upload Image:</label>
          <input
            type="file"
            {...register('userImage', { required: 'User image is required' })}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
          {errors.userImage && <p style={{ color: 'red' }}>{errors.userImage.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#31B665', color: 'white', border: 'none', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
