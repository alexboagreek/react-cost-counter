import Costs from "./components/Costs";

function App() {

    const costs = [
      {
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        amount: 999.99
      },
      {
        date: new Date(2021, 11, 25),
        description: 'MacBook',
        amount: 1259.43
      },
      {
        date: new Date(2021, 2, 25),
        description: 'Труселя',
        amount: 29.56
      }
    ];

  return (
    <div>
      <h1>Start React App</h1>
      <Costs costs={ costs }/>
     
    </div>
  );
}

export default App;
