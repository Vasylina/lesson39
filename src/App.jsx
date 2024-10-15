import Button from "./components/Button";
import Input from "./components/Input";
import Counter from "./components/statefull";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <Button text="Submit button" type="submit" />
      <Input placeholder="Enter your name" type="text" />
      <Counter />
    </div>
  );
};

export default App;
