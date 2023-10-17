import * as Yup from "yup"

export const schema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("first name should not be empty !"),
  email: Yup.string().email("Invalid email").required("email is required"),
})
