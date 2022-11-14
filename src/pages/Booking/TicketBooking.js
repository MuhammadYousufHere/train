import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import UiInput from "../../components/Form/UiInput";
import Counter from "./Counter";
import * as Yup from "yup";
const TicketBooking = () => {
  const initialValues = {
    visitCountry: "",
    fromCountry: "",
    age: "",
    persons: "1",
  };
  const validationSchema = Yup.object().shape({
    visitCountry: Yup.string().required("Required"),
    fromCountry: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
    persons: Yup.string(),
  });
  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
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
            <UiInput
              placeholder='type here..'
              label='Choose a country to visit'
              withIcon
              name='visitCountry'
              values={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <UiInput
              placeholder='type here..'
              withIcon
              name='fromCountry'
              label='Country of Residence'
              values={values.fromCountry}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <UiInput
              placeholder='adult(26-59)'
              label='Age'
              name='age'
              values={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <Counter />
            </UiInput>
            <div className='submit-btn'>
              <Button
                title='Find My Ticket'
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

export default TicketBooking;
