import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values) => {
    console.log('Form Data', values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Sign Up</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
              <Field 
                name="username" 
                type="text" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
              <Field 
                name="email" 
                type="email" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
              <Field 
                name="password" 
                type="password" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <Field 
                name="confirmPassword" 
                type="password" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
                placeholder="Confirm your password"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex justify-between items-center mb-6">
              <Link to="/login" className="text-sm text-blue-500 hover:text-blue-700 transition duration-300">Already have an account? Login</Link>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg">
            <Link to="/dashboard" className="text-sm ">Signup</Link>
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
