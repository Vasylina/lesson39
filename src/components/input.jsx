const Input = (props) => {
  console.log(props);

  const InputChange = () => {
    console.log("Input was changed!");
  };

  return (
    <input
      onChange={InputChange}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
