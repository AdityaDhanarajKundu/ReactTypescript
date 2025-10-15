import RandomNumber from "./components/restrictions/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import Button from "./components/html/Button";

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
      {/* <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <List items={['bruce', 'clark', 'diana', 'peter']} onClick={(item) => console.log(item)}/>
      <List items={[1,2,3]} onClick={(item) => console.log(item)} />   */}
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <Button variant="primary" onClick={()=> console.log("clicked")} >
        <div>Primary Button</div>
      </Button>
    </>
  );
}

export default App;
