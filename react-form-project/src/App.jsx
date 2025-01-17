import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("Submitting the form", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          className="border-2 border-cyan-500 my-auto"
              {...register('firstName', 
          {
            required: true,
            minLength: { value: 3, message: "Minimum length is 3 characters" },
            maxLength: { value: 6, message: "Maximum length is 6 characters" },
          })}
        />
        {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label>Middle Name:</label>
        <input className="border-2 border-cyan-500 my-3"
          {...register("middleName",{
            required:true,
            minLength:{value:3,message:"Minimum length is 3 characters"},
            maxLength:{value:6,message:"Maximum length is 6 characters"},
          })}
          />
          {errors.middleName && <p className="text-red-600">{errors.middleName.message}</p>}
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input
          {...register("lastName",{
            pattern:{
              value:'/^[A-Za-z] + $/i',
              message:'last Name is not as per the rules'
            }
          })}
          className="border-2 border-cyan-500 my-2"
        />
      {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}

      </div>

      <input type="submit" disabled = {isSubmitting} 
      value={isSubmitting ? "Submitting":"submit"}
        className="border-2 border-cyan-950 "/>
    </form>
  );
}

export default App;
