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
  const [isLoading, setIsLoading] = useState(false);
  const [loadedData, setLoadedData] = useState();
  const fakeRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          'Thank you '+validFirstName+' for signing up.'
        );
      }, 2000);
    });
  };
  const submitHandler = async () => {
    setIsLoading(true);
    const result = await fakeRequest();
    setLoadedData(result);
    setIsLoading(false);
  };

  const isValidEmail=(email)=> {
    return /\S+@\S+\.\S+/.test(email);
  }

  const Validate=()=>{

    if(validFirstName.length>0&&validLastName.length>0&&validPhoneNumber.length>0&&validEmail.length>0&&isValidEmail(validEmail)&&validConsent===true&&!isNaN(validPhoneNumber)){
      setDisabledSubmit(false);
    }else{
      setDisabledSubmit(true);
    }
    
   
    
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
    <div>
    <div style={{ display: isLoading ? 'flex' : 'none' }} className='modal'>
        <div className='modal-content'>
          <div className='loader'></div>
          <div className='modal-text'>Signing Up...</div>
        </div>
      </div>
    <div className="App">
    {!loadedData &&<Card>
        <Header title="Signup"></Header>
        <TextInput validateValue={SaveFirstName} placeholder="First name"></TextInput>
        <TextInput validateValue={SaveLastName} placeholder="Last name"></TextInput>
        <PhoneInput validateValue={SaveContactNumber}t></PhoneInput>
        <EmailInput validateValue={SaveEmail}></EmailInput>
        <RadioInput validateValue={SaveGender} question ="Gender:"></RadioInput>
        <TickBox validateValue={SaveConsent} options="I hereby consent to be contacted"></TickBox>
        <SubmitButton buttonState={disabledSubmit} onClickValidate={submitHandler} buttonText="Signup"></SubmitButton>
        <br/><br/>
        <small>{!validFirstName ? 'First Name Required' : ''}</small>
        <br/><small>{!validLastName ? 'Last Name Required' : ''}</small>
        <br/><small>{!validPhoneNumber ? 'Valid Contact Number Required' : ''}</small>
        <br/><small>{!isValidEmail(validEmail) ? 'Valid Email Required' : ''}</small>
        <br/><small>{!validConsent ? 'Consent Required' : ''}</small>
      </Card>}
      {loadedData && <Card><p>{loadedData}</p></Card>}
    </div>
    </div>
  );
}

export default App;
