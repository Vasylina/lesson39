const Button = (props) => {
  console.log(props);

  const ButtonClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <button onClick={ButtonClick} type={props.type}>
      {props.text}
    </button>
  );
};

export default Button;
