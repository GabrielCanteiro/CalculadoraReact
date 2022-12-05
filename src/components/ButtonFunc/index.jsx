import { ButtonContainerFunction } from "./styles";

const ButtonF = ({label, onClick,}) => {
    return (
      <ButtonContainerFunction onClick={onClick} >
        {label}
      </ButtonContainerFunction>
    );
  }
  
  export default ButtonF;
  