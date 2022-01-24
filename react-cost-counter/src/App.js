import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

    const costs = [
      {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        amount: 999.99
      },
      {
        id: 'c2',
        date: new Date(2021, 11, 25),
        description: 'MacBook',
        amount: 1259.43
      },
      {
        id: 'c3',
        date: new Date(2021, 2, 25),
        description: 'Труселя',
        amount: 29.56
      }
    ];
    const addCostHandler = (cost) => {
      console.log(cost);
      console.log('App Component');

    }
  return (
    <div>
      <NewCost onAddCost={ addCostHandler }/>
      <Costs costs={ costs }/>
    </div>
  );
}

export default App;
