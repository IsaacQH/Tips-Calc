
import type { Menuitem } from "../types"
import { formatPrice } from "../helpers"

type MenuitemProp = {
    item: Menuitem,
    addItem: (item:Menuitem) => void      //en el Hover del addItem aparece
}

export default function MenuItem({item, addItem}:MenuitemProp) {
  return (
    <>
    <button 
        className="border-2 rounded-md border-orange-400 flex justify-between w-full p-3 hover:bg-orange-400"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="text-orange-800 font-bold">{formatPrice(item.price)}</p>
    </button>

    </>
  )
}

