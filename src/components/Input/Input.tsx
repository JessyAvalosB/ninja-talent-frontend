import { InputProps } from "../../interfaces/Input/Input";
import { InputBase, InputContainer, InputError, InputLabel } from "./Style";

const Input = (props: InputProps): JSX.Element => {
  const { name, label, errorMessage = null, ...rest } = props;
  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputBase id={name} name={name} {...rest} />
      {errorMessage && <InputError>{errorMessage}</InputError>}
    </InputContainer>
  );
};

export default Input;
