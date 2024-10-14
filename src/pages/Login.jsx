import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log('Form Data', values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email/Username</label>
              <Field 
                name="email" 
                type="email" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Enter your email/username"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
              <Field 
                name="password" 
                type="password" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 transition duration-300"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-purple-500 hover:text-purple-700 transition duration-300">Forgot Password?</a>
              <Link to="/signup" className="text-sm text-purple-500 hover:text-purple-700 transition duration-300">Sign Up</Link>
            </div>

            <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 shadow-lg">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
