import { useForm } from "react-hook-form";
import Input from "./Input";
import InputSpacer from "./InputSpacer";

const FormError = ({errorMessage} : { errorMessage: any}) => {
  return <p className="error">{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: any;
}

export default function AddContactFormProps(props: AddContactFormProps) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="First Name"
          name="firstName"
          formRef={register({ required: true })}
        />
        {errors.firstName && (
          <FormError errorMessage="First Name is required" />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Last Name"
          name="lastName"
          formRef={register({ required: true })}
        />
         {errors.lastName && <FormError errorMessage={ "el apellido es requerido" } />}
      </InputSpacer>
        <InputSpacer>
        <Input
            placeholder="Email"
            name="email"
            formRef={register({required: true,minLength: 5})}
        />
        {errors.email && <FormError errorMessage={ "el email es requerido" } />}
        </InputSpacer>
        <InputSpacer>
        <Input
            placeholder="Avatar"
            name="avatar"
            formRef={register({required: true})}
        />
        {errors.avatar && <FormError errorMessage={ "el avatar es requerido" } />}  
        </InputSpacer>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Contact
        </button>
    </form>
  );
}
