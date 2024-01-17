import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 5,
  });

  const notANumber = userInput.duration >= 0;
  function handleChange(identifier, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: parseInt(value),
      };
    });
    console.log(userInput);
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} input={userInput} />
      {!notANumber && (
        <h1 class="center">Please enter a duration greater than zero.</h1>
      )}
      {notANumber && <Results userInput={userInput} />}
    </>
  );
}

export default App;
