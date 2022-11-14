import React from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import UiInput from "../../components/Form/UiInput";
import Destination from "../Destination/Destination";
// import * as Yup from "yup";
const PassesBooking = () => {
  const initailValues = {
    from: "",
    to: "",
    departure: "",
    departure_time: "",
    return: "",
    return_time: "",
    persons: "1",
    age: "",
  };
  return (
    <Form
      initialValues={initailValues}
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
            <Destination
              onBlur={handleBlur}
              onChange={handleChange}
              from={values.form}
              to={values.to}
            />
            <div className='group'>
              <UiInput
                placeholder='1/11/2022'
                label='Departure'
                name='departure'
                type='date'
                value={values.departure}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <UiInput
                placeholder='7:00'
                label='_'
                type='time'
                name='departure_time'
                value={values.departure_time}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className='group'>
              <UiInput
                placeholder='9/11/2022'
                label='Return'
                name='return'
                type='date'
                value={values.return}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <UiInput
                placeholder='9:00'
                label='_'
                type='time'
                name='return_time'
                value={values.return_time}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className='passenger'>
              <label htmlFor='passenger-btn'>Passenger</label>
              <Button
                varient='secondary'
                title='Add A Passenger'
                // type="Submit"
                width='100%'
              />
              <div className='group'>
                <UiInput
                  placeholder='adult(26-59)'
                  name='age'
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <UiInput
                  placeholder='1'
                  name='persons'
                  value={values.persons}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className='submit-btn'>
              <Button
                title='Find My Pass'
                borderRadius='0'
                type='Submit'
                width='100%'
              />
            </div>
          </form>
        );
      }}
    </Form>
  );
};

export default PassesBooking;
