import React from "react";
import { Form } from "../../components/Form";
import * as Yup from "yup";
import Input from "./input";
import Button from "../../components/Button/Button";
export const ContactForm = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({});
  return (
    <div className='contact-form'>
      <div className='contact-form_content'>
        <div className='headings'>
          <h1>What would you like to say?</h1>
          <h3>Complete the form below and we'll get back to you soon</h3>
        </div>
        <div className='form-section'>
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props) => {
              const {
                values,
                // touched,
                // errors,
                // dirty,
                // isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                // handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className='top row'>
                    <Input
                      label='First Name'
                      placeholder='Enter your first name'
                      value={values.firstname}
                      onBlur={handleBlur}
                      name='firstname'
                      onChange={handleChange}
                    />
                    <Input
                      label='Last Name'
                      placeholder='Enter your last name'
                      value={values.lastname}
                      name='lastname'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='middle row'>
                    <Input
                      label='Your Email'
                      placeholder='Enter your email address'
                      value={values.email}
                      name='email'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type='email'
                    />
                    <Input
                      label='Company Name (Optional)'
                      placeholder='Enter your company name'
                      value={values.company}
                      name='company'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='bottom row'>
                    <div className='input-group'>
                      <label htmlFor='message'>
                        What would you like to say?
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        rows='6'
                        cols='50'
                        value={values.message}
                        maxLength='300'
                        onBlur={handleBlur}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className='submit-box'>
                    <Button title='Submit' varient='secondary' type='submit' />
                  </div>
                </form>
              );
            }}
          </Form>
        </div>
        <div className='t-n-c'>
          Never submit passwords or credit card information through this form.
          This site is protected by reCAPTCHA and the Google
          <a href='/'> Privacy Policy</a> and <a href='/'>Terms of Service</a>{" "}
          apply
        </div>
      </div>
    </div>
  );
};
