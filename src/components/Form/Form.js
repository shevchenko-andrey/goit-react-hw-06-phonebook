import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { itemSlice } from "../../redux/contactsSlice";
import * as yup from "yup";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";
import { getContacts } from "../../redux/selectors";
import "yup-phone";

import {
  FormText,
  Button,
  InputForm,
  FormStyled,
  PhoneWrapper,
} from "./Form.styled";

const { add } = itemSlice.actions;

const schema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
  number: yup.string().phone().required(),
});

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const loginInputId = useRef(nanoid());
  const telInputId = useRef(nanoid());

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const isDuplicated = contacts.find(
      (contacts) => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    dispatch(add({ name, number, id: nanoid() }));
    resetForm();
  };
  const formError = (message) => <FormText>{message}</FormText>;

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <div>
          <label htmlFor={loginInputId.current}>Name</label>
          <div>
            <InputForm id={loginInputId.current} name="name" type="text" />
            <ErrorMessage name="name" render={formError} />
          </div>
        </div>
        <PhoneWrapper>
          <label htmlFor={telInputId.current}>Number</label>
          <div>
            <InputForm id={telInputId.current} name="number" type="tel" />
            <ErrorMessage name="number" render={formError} />
          </div>
        </PhoneWrapper>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
