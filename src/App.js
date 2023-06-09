import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row} from './style';
import { useState } from "react";

const App = () =>  { 
  const [display, setDisplay] = useState('0');
  const [displayCalculation, setDisplayCalculation] = useState('');
  const formatBR = new Intl.NumberFormat('pt-BR');
  var CalculationFinish = false;

  //Realiza a adição de um item no display
  const AddNumberDisplay = (number) => {
    if(String(displayCalculation).includes("=")){
      handleOnClear();
    }

    setDisplay(display => {
      console.log(String(displayCalculation).includes("="));
      let result = `${display === '0'? '' :display}${number}`;
      return String(result);
    });
  };

  //Função de limpar a calculadora
  const handleOnClear = () => {
    setDisplay('0');
    setDisplayCalculation('')
  };

  //Função operacional
  const handleOperationNumbers = (operation) => {
    if(display !== '0'){
      setDisplayCalculation(dc => `${dc === '' || String(displayCalculation).includes("=")? '': dc} ${formatBR.format(parseFloat(display))} ${operation}`);
      setDisplay('0');
    }
  };

  //Função de solução da equação
  const solutionEquation = () => {
    if(displayCalculation !== ''){
      let result = eval(displayCalculation.replace(/\./g, "").replace(",", ".")+display);
      setDisplayCalculation(dc => `${dc === ''? '': dc}${display + " = "}`);
      setDisplay(result);
      CalculationFinish = true;
    }
  }

  return (
    <Container>
      <Content>
        <Input value={formatBR.format(parseFloat(display))} valueCalculation={displayCalculation}/>
        <Row>
          <Button label={"%"} color={"#323232"} disabled/>
          <Button label={"C"} color={"#323232"}  onClick={handleOnClear}/>
          <Button label={"<"} color={"#323232"} disabled/>
          <Button label={"/"} color={"#323232"} onClick={() => handleOperationNumbers("/")}/>
        </Row>
        <Row>
          <Button label={"7"} onClick={() => AddNumberDisplay('7')}/>
          <Button label={"8"} onClick={() => AddNumberDisplay('8')}/>
          <Button label={"9"} onClick={() => AddNumberDisplay('9')}/>
          <Button label={"x"} color={"#323232"}  onClick={() => handleOperationNumbers("*")}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={() => AddNumberDisplay('4')}/>
          <Button label={"5"} onClick={() => AddNumberDisplay('5')}/>
          <Button label={"6"} onClick={() => AddNumberDisplay('6')}/>
          <Button label={"-"} color={"#323232"} onClick={() => handleOperationNumbers("-")} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => AddNumberDisplay('1')}/>
          <Button label={"2"} onClick={() => AddNumberDisplay('2')}/>
          <Button label={"3"} onClick={() => AddNumberDisplay('3')}/>
          <Button label={"+"} color={"#323232"} onClick={() => handleOperationNumbers("+")}/>
        </Row>
        <Row>
          <Button label={"+/-"} disabled/>
          <Button label={"0"} onClick={() => AddNumberDisplay('0')}/>
          <Button label={","} disabled/>
          <Button label={"="} color={"#7e1b8a"} onClick={solutionEquation}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
