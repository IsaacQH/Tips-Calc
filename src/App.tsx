
//Componentes
import MenuItem from "./components/MenuItem"

import { menuItems } from "./data/db"  //Datos que interpretará la app

function App() {

  return (
    <>
    <header className=" bg-orange-500 py-9">
      <h1 className="text-center font-black text-white text-4xl">Restaurant bill</h1>
    </header>

    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

      <div className=" sm:px-3">
        <h2 className="text-4xl font-black text-orange-800">Menu</h2>
        <div className=" space-y-3 mt-6">
          {menuItems.map( (item) => (
            <MenuItem
            key = {item.id}
            item = {item}
            />
          ))}
        </div>
        
      </div>

      <div>
        <h2 className="text-4xl font-black text-orange-800">Bill</h2>
        <div className=" space-y-3 mt-6">

        </div>
      </div>

    </main>
    </>
  )
}

export default App
