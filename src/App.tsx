
//Componentes
import MenuItem from "./components/MenuItem"
import { OrderContents } from "./components/OrderContents"
import { OrderTotal } from "./components/OrderTotal"
import { TipsPercentage } from "./components/TipsPercentage"

//Import data
import { menuItems } from "./data/db"  //Datos que interpretará la app

//Import hooks
import { useOrder } from "./hooks/useOrder"


function App() {

  const {order, tip, setTip, addItem, removeItem} = useOrder()

  return (
    <>
    <header className=" bg-orange-400 py-9">
      <h1 className="text-center font-black text-white text-5xl">Restaurant bill</h1>
    </header>

    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

      <div className="px-3">
        <h2 className="text-4xl font-black text-orange-800">Menu</h2>
        <div className=" space-y-3 mt-6">
          {menuItems.map( (item) => (
            <MenuItem
              key = {item.id}
              item = {item}
              addItem={addItem}
            />
          ))}
        </div>
        
      </div>

      <div className="border border-dashed border-orange-800 mt-16 mx-5 py-5 px-6 rounded-lg space-y-7">
        <OrderContents
          order = {order}
          removeItem = {removeItem}
        />

        <TipsPercentage
          setTip = {setTip}
        />

        <OrderTotal
          order = {order}
        />
      </div>

    </main>
    </>
  )
}

export default App
