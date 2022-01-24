import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

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
      <NewCost />
      <Costs costs={ costs }/>
     
    </div>
  );
}

export default App;
