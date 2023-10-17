import { useFormik } from "formik"
import InputField from "../../components/inputfield"
import TextareaInput from "../../components/textarea"
import { inputData } from "../../utilities/inputdata"
import FormButton from "../../components/button"
import "../form/form.css"
import { schema } from "../../schema"

const RegistrationForm = () => {
  const { handleChange, handleSubmit, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        phone: "",
        age: "",
        hobbies: "",
      },
      // validationSchema: schema,
      onSubmit: (data) => {
        console.log("****", data)
      },
    }
  )

  return (
    <div className="main">
      <div className="form__container">
        <form className="form" onSubmit={handleSubmit}>
          {inputData.map((ele) => {
            return (
              <div key={ele.id} className="form__box">
                <InputField
                  id={ele.name}
                  label={ele.label}
                  name={ele.name}
                  type={ele.type}
                  placeholder={ele.placeholder}
                  handlechange={handleChange}
                  handleBlur={handleBlur}
                  className={"input__field"}
                />
              </div>
            )
          })}
          <TextareaInput
            cols={"20"}
            rows={"3"}
            label={"Hobbies"}
            className={"textarea__input"}
            name={"hobbies"}
            handleChange={handleChange}
          />
          <div className="terms__cond">
            <InputField type={"checkbox"} id="terms" />
            <label htmlFor="terms">Terms and conditions</label>
          </div>
          <FormButton
            type={"submit"}
            onclick={handleSubmit}
            value={"submit"}
            buttonStyle={"form__button"}
          />
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
