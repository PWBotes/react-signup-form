import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import TextInput from './components/TextInput';
import EmailInput from './components/EmailInput';
import PhoneInput from './components/PhoneInput';
import RadioInput from './components/RadioInput';
import TickBox from './components/TickBox';
import SubmitButton from './components/SubmitButton';
import React, {useState} from 'react';








function App() {

  const [validFirstName, setValidFirstName]=useState("");
  const [validLastName, setValidLastName]=useState("");
  const [validPhoneNumber, setValidPhoneNumber]=useState("");
  const [validEmail, setValidEmail]=useState("");
  const [validGender, setValidGender]=useState("Male");
  const [validConsent, setValidConsent]=useState(false);
  const [canSubmit, setCanSubmit]=useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const Validate=()=>{
    if(validFirstName.length>0){
      console.log(validFirstName);
    }
    else{
    }

    if(validLastName.length>0){
     console.log(validLastName);
    }
    else{
     console.log("Last Name Empty");
    }

    if(validPhoneNumber.length>0){
      console.log(validPhoneNumber);
    }
    else{
      console.log("Contact Number Empty");
    }

    if(validEmail.length>0){
      console.log(validEmail);
    }
    else{
     console.log("Email Empty");
    }

    console.log(validGender);

    if(validConsent===true){
      console.log(validConsent);
    }
    else{
      console.log(validConsent);
      console.log("Consent required");
    }

    if(validFirstName.length>0&&validLastName.length>0&&validPhoneNumber.length>0&&validEmail.length>0&&validConsent===true){
      setDisabledSubmit(false);
    }else{
      setDisabledSubmit(true);
    }
    
    //console.log("CANSUBMIT: "+canSubmit);
   
    
  }
  const SaveFirstName=(value)=>{
    setValidFirstName(value);
    Validate();
  }
  const SaveLastName=(value)=>{
    setValidLastName(value);
    Validate();
  }
  const SaveContactNumber=(value)=>{
    setValidPhoneNumber(value);
    Validate();
  }
  const SaveEmail=(value)=>{
    setValidEmail(value);
    Validate();
  }
  const SaveGender=(value)=>{
    setValidGender(value);
    Validate();
  }
  const SaveConsent=(value)=>{
    setValidConsent(value);
    Validate();
  }

  return (
    <div className="App">
      <Card>
        <Header title="Sign Up"></Header>
        <TextInput validateValue={SaveFirstName} placeholder="First name"></TextInput>
        <TextInput validateValue={SaveLastName} placeholder="Last name"></TextInput>
        <PhoneInput validateValue={SaveContactNumber}t></PhoneInput>
        <EmailInput validateValue={SaveEmail}></EmailInput>
        <RadioInput validateValue={SaveGender} question ="Gender:"></RadioInput>
        <TickBox validateValue={SaveConsent} options="I hereby consent to be contacted"></TickBox>
        <SubmitButton buttonState={disabledSubmit} onClickValidate={Validate} buttonText="Sign Up"></SubmitButton>
        <br/><br/>
        <small>{!validFirstName ? 'First Name Required' : ''}</small>
        <br/><small>{!validLastName ? 'Last Name Required' : ''}</small>
        <br/><small>{!validPhoneNumber ? 'Contact Number Required' : ''}</small>
        <br/><small>{!validEmail ? 'Email Invalid' : ''}</small>
        <br/><small>{!validConsent ? 'Consent Required' : ''}</small>
      </Card>
    </div>
  );
}

export default App;
