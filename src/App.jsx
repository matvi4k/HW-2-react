import "./App.css";

const Greeting = props => <h1>Привіт, {props.name}!</h1>

const Message = props => <p>{props.text}</p>

const Button = props => <button onClick={props.onClick}>Натисни мене</button>

function App() {
  const handleButtonClick = () => {
    console.log('Кнопка була натиснута')
  }

  return (
    <>
     <Greeting name='Матвій'/>
     <Message text='Це довільне повідомлення'/>
     <Button onClick={handleButtonClick}/>
    </>
  );
}

export default App;