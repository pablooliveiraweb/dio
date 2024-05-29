import { InputContainer } from "./styles";

const Input = ({value}) => {
  return (
    <InputContainer>
    <input desabled value={value}/>
    </InputContainer>
  );
}

export default Input;