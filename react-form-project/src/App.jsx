
import {Form, useForm} from "react-hook-form"
import './App.css'

function App() {

  const {register,
        handleSubmit,
        watch,
        formState:{error},
      } = useForm();
    
      const onSubmit = (data)=>{
        console.log("submitting the form",data);
        
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input {...register('first Name',
          {
            required:true, 
            minLength:{value:3,message:"Min Len at least 3"},
            maxLength:6})} className="border-2 border-cyan-500 my-auto"/>
            {errors.firstName}
      </div>
      <br />

      <div>
        <label>Middle Name:</label>
        <input {...register('middleName')} className="border-2 border-cyan-500 my-3"/>
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input {...register('lastName')} className="border-2 border-cyan-500 my-2"/>
      </div>

      <input type="submit"/>
    </form>
  )
}

export default App
