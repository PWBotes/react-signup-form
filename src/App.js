import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import TextInput from './components/TextInput';
import EmailInput from './components/EmailInput';
import PhoneInput from './components/PhoneInput';
import RadioInput from './components/RadioInput';
import TickBox from './components/TickBox';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div className="App">
      <Card>
        <Header title="Sign Up"></Header>
        <TextInput placeholder="First name"></TextInput>
        <TextInput placeholder="Last name"></TextInput>
        <PhoneInput></PhoneInput>
        <EmailInput></EmailInput>
        <RadioInput question ="Gender:" options="male,female,rather not say"></RadioInput>
        <TickBox options="I hereby consent to be contacted"></TickBox>
        <SubmitButton buttonText="Sign Up"></SubmitButton>
      </Card>
    </div>
  );
}

export default App;
