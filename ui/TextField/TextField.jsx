import styles from "./TextField.module.scss";

import { useForm } from "react-hook-form";

const TextField = ({ type, name, placeholder, required }) => {
  const { register } = useForm();

  return (
    <div className={"textField"}>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
