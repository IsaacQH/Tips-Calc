
import type { Menuitem } from "../types"

type MenuitemProp = {
    item: Menuitem
}

export default function MenuItem({item}:MenuitemProp) {
  return (
    <>
    <button className="border-2 rounded-md border-orange-400 flex justify-between w-full p-3 hover:bg-orange-400">
        <p>{item.name}</p>
        <p className=" font-bold">${item.price}.00</p>
    </button>

    </>
  )
}

