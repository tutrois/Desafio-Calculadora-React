import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row} from './style';
import { useState } from "react";

import { BoxIconElement } from 'boxicons';

const App = () =>  { 
  const [display, setDisplayNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);


  const AddNumberDisplay = (number) => {
    setDisplayNumber(prev => `${number}${prev == '0'? '' :prev}`);
  };

  const handleOnClear = () => {
    setDisplayNumber('0');
  };

 
  const handleSumNumbers = () => {
    if (firstNumber == '0'){
      setFirstNumber(String(display));
      setDisplayNumber('0');
    }else{
      const sum = Number(firstNumber) + Number(display);
      setDisplayNumber(String(sum));
    }
  };

  return (
    <Container>
      <Content>
        <Input value={display}/>
        <Row>
          <Button label={"%"} color={"#323232"}/>
          <Button label={"C"} color={"#323232"}  onClick={handleOnClear}/>
          <Button label={"<"} color={"#323232"}/>
          <Button label={"/"} color={"#323232"}/>
        </Row>
        <Row>
          <Button label={"7"} onClick={() => AddNumberDisplay('7')}/>
          <Button label={"8"} onClick={() => AddNumberDisplay('8')}/>
          <Button label={"9"} onClick={() => AddNumberDisplay('9')}/>
          <Button label={"x"} color={"#323232"}  />

         
        </Row>
        <Row>
          <Button label={"4"} onClick={() => AddNumberDisplay('4')}/>
          <Button label={"5"} onClick={() => AddNumberDisplay('5')}/>
          <Button label={"6"} onClick={() => AddNumberDisplay('6')}/>
          <Button label={"-"} color={"#323232"}  />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => AddNumberDisplay('1')}/>
          <Button label={"2"} onClick={() => AddNumberDisplay('2')}/>
          <Button label={"3"} onClick={() => AddNumberDisplay('3')}/>
          <Button label={"+"} color={"#323232"}/>
        </Row>
        <Row>
          <Button label={"+/-"}/>
          <Button label={"0"} onClick={AddNumberDisplay}/>
          <Button label={","}/>
          <Button label={"="} color={"#7e1b8a"} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
