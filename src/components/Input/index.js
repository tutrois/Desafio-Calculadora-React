import {InputContainer} from "./styles"

const Input = ({value, valueCalculation}) =>  {
    return (
      <InputContainer>
        <input disabled value={valueCalculation} className="calculation"/>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;
  