import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import ThemeContextProvider from "./components/context/ThemeContext";
import Box from "./components/context/Box";

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // };

  // const namesList = [
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   },
  //   {
  //     first: 'Peter',
  //     last: 'Parker'
  //   }
  // ];
  
  return (
    <>
      {/* <Status status="error" />
      <Heading>Here's the heading</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Aditya" isLoggedIn={false}/> */}
      {/* <Button handleClick={(event,id) => console.log('Button clicked', event, id)}/>
      <Input value="" handleChange={(event) => console.log(event) }/>  
      <Container style={{border: '1px solid black', padding: '1rem'}}/> */}
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </>
  )
}

export default App
