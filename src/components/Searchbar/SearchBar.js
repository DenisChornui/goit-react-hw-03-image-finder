import { ErrorMessage, Field, Form, Formik } from 'formik';
import {FcSearch} from "react-icons/fc"

export const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <Formik
        initialValues={{ value: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values.value);
          actions.resetForm();
        }}>

        <Form>
          <button type="submit">
            <span>Search</span>
            <FcSearch />
          </button>

          <Field
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="value" component="div" />
        </Form>
      </Formik>
    </header>
  );
};
