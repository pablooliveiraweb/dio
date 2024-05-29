
import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row} from  "./styles";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [fistNumber, setFistNumber] = useState('0');
  const [operation, setOperation] = useState();
  
const handleClear = () =>{
setCurrentNumber('0') 
setFistNumber('0');
setOperation('');
  
};
const handleAddNumber = (num) =>{
  setCurrentNumber (prev => (prev === '0' ? `${num}` : `${prev}${num}`))
}
const handleSumNumber = () =>{
  if(fistNumber === '0') {
    setFistNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('+')
  
}else{
  const sum = Number(fistNumber) + Number(currentNumber);
  setCurrentNumber(String(sum)); 
  setOperation('');
  
}
}

const handleMinNumber = () =>{
  if(fistNumber === '0') {
    setFistNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('-')
  
}else{
  const sum = Number(fistNumber) - Number(currentNumber);
  setCurrentNumber(String(sum)); 
  setOperation('');
  
}
}

const handleDivNumber = () =>{
  if(fistNumber === '0') {
    setFistNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('/')
  
}else{
  const sum = Number(fistNumber) / Number(currentNumber);
  setCurrentNumber(String(sum)); 
  setOperation('');
  
}
}

const handleMultNumber = () =>{
  if(fistNumber === '0') {
    setFistNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('x')
  
}else{
  const sum = Number(fistNumber) * Number(currentNumber);
  setCurrentNumber(String(sum)); 
  setOperation('');
  
}
}



const handleEquals = () =>{
  if(fistNumber !== '0' && operation !== '' && currentNumber !== '0' )  {
    switch(operation){
      case '+':
        handleSumNumber();
      break;
      case '-':
        handleMinNumber();
      break;
      case '/':
        handleDivNumber();
      break;
      case 'x':
        handleMultNumber();
      break;
      default: 
      break;
    }
}
}



  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="C" onClick={() => handleClear()}/>
        <Button label="." onClick={() => handleAddNumber('.')}/>
        <Button label="/" onClick={handleDivNumber}/>
        <Button label="-" onClick={handleMinNumber}/>
      </Row>

      <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="x" onClick={handleMultNumber}/>
      </Row>

      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={ handleSumNumber}/>
      </Row>

      <Row>
      <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
      </Row>
      
      </Content>
      
    </Container>
  );
}

export default App;
