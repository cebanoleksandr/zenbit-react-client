import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import TextError from './TextError';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { register } from '../../api/auth';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setAlertAC } from '../../redux/alertSlice';

export interface IRegisterValues {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues: IRegisterValues = {
      email: '',
      password: '',
    }
  
    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });

    const onSubmit = async (values: IRegisterValues, onSubmitProps: FormikHelpers<IRegisterValues>) => {
      try {
        setIsSubmitting(true);
        const data = await register({ email: values.email, password: values.password });
        localStorage.setItem("zenbit-token", data.access_token);
        onSubmitProps.resetForm();
        navigate("/deals");
      } catch (error: any) {
        dispatch(setAlertAC({ mode: 'error', text: error.response?.data?.message || 'Registration failed' }));
      } finally {
        setIsSubmitting(false);
      }
    }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <h2 className='text-3xl font-bold mb-7 text-left'>Registration</h2>

          <div className="mb-6 relative">
            <label htmlFor="email" className={`${!!formik.errors.email && !!formik.touched.email && 'text-red-500'} font-semibold`}>
              Email
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              className={`w-full p-2 rounded border border-[#E0E0E0] outline-[#cfbb98]
                ${!!formik.errors.email && !!formik.touched.email ? 'bg-red-200' : 'bg-[#E0E0E0]'}`}
              placeholder="Email"
            />
            <ErrorMessage name='email'>
              {(msg) => <TextError>{msg}</TextError>}
            </ErrorMessage>
          </div>

          <div className="mb-10 relative">
            <label htmlFor="password" className={`${!!formik.errors.password && !!formik.touched.password && 'text-red-500'} font-semibold`}>
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={`w-full p-2 rounded border border-[#E0E0E0] outline-[#cfbb98]
                ${!!formik.errors.password && !!formik.touched.password ? 'bg-red-200' : 'bg-[#E0E0E0]'}`}
              placeholder="Password"
            />
            <ErrorMessage name='password'>
              {(msg) => <TextError>{msg}</TextError>}
            </ErrorMessage>
          </div>

          <Button full mode='secondary' className='mb-3'>
            {isSubmitting ? 'Registering...' : 'Sign Up'}
          </Button>

          <p className='text-center'>
            Already have an account? <Link to="/login" className="text-[#B29F7E] font-semibold hover:text-[#cfbb98]">Sign In</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
