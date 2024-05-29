import {ButtonConteiner} from "./styles";

const Button = ({label, onClick}) => {
  console.log(onClick);
  return (
    <ButtonConteiner onClick={onClick} type="button">
      {label}
    </ButtonConteiner>
  );
}

export default Button;