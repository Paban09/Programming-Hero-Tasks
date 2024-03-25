import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

    const handleSignUpSubmit=(data)=>{
      console.log('SignUp',data);
    }
    const handleUpdateProfile=(data)=>{
      console.log('Update',data);
    }

  return (
    <>
      <Grandpa></Grandpa>

      <h1>Reuseable Form</h1>
        <ReuseableForm 
          formTitle={'Sign Up'} 
          handleSubmit={handleSignUpSubmit} 
          submitBtnText={'Register'}
          >
          <div>
            <h1>Reuseable Sign Up Form</h1>
            <p>Please sign uo right now</p>
          </div>
        </ReuseableForm>

        <ReuseableForm 
          formTitle={'Profile Update'} 
          handleSubmit={handleUpdateProfile}  
          submitBtnText={'Update'}
          >
          <div>
            <h1>Reuseable Update  Form</h1>
            <p>Update profile</p>
          </div>
        </ReuseableForm>

      <h1>Custom Hook Form</h1>
      <HookForm></HookForm>
      <h1>Uncontrolled Reference Form</h1>
      <RefForm></RefForm>
      <h1>Controlled Stateful Form</h1>
      <StatefulForm></StatefulForm>
      <h1>Normal Form</h1>
      <SimpleForm></SimpleForm>
         
    </>
  )
}

export default App
