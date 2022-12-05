import { useState } from "react";
import Button from "./components/Button";
import ButtonF from "./components/ButtonFunc";
import Input from "./components/Input";
import { Container, Content, Row, } from "./styles";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev=> `${prev==='0'? '': prev}${num}`)
  }
  
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
      
    }
  }  
  
  const handleRemNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const rem = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(rem))
      setOperation('')
      
    }
  }

  const handleDivisionNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const division = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setOperation('')
    }
  }
  const handleMultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }
  
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== 0 ){
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;
          case '-':
            handleRemNumbers()
            break;
            case '/':
              handleDivisionNumber()
              break;
              case '*':
                handleMultNumber()
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
        <ButtonF label="C" onClick={()=> (handleOnClear())}/>
        <ButtonF label="/" onClick={handleDivisionNumber}/>
        <ButtonF label="X" onClick={handleMultNumber}/>
        <ButtonF label="&nbsp;" onClick={()=> handleAddNumber('')}/>
    </Row>

    <Row>
        <Button label="7" onClick={()=> handleAddNumber('7')}/>
        <Button label="8" onClick={()=> handleAddNumber('8')}/>
        <Button label="9" onClick={()=> handleAddNumber('9')}/>
        <ButtonF label="-" onClick={handleRemNumbers}/>
      </Row>
    <Row>
        <Button label="4" onClick={()=> handleAddNumber('4')}/>
        <Button label="5" onClick={()=> handleAddNumber('5')}/>
        <Button label="6" onClick={()=> handleAddNumber('6')}/>
        <ButtonF label="+" onClick={handleSumNumbers}/>
      </Row>
    <Row>
        <Button label="1" onClick={()=> handleAddNumber('1')}/>
        <Button label="2" onClick={()=> handleAddNumber('2')}/>
        <Button label="3" onClick={()=> handleAddNumber('3')}/>
        <ButtonF label="=" onClick={handleEquals}/>
      </Row>      
    </Content>  
    </Container>
  );
}

export default App;
