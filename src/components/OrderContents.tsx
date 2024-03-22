
import type { Orderitem } from "../types"
import { formatPrice } from "../helpers"

type OrderContentProp = {     //Se crea ek typo de los prop
    order: Orderitem[]      //es tipo orderitem pero en areglo
}

export const OrderContents = ({order}:OrderContentProp) => {
  return (
    <div>
        <h2 className="text-4xl font-black text-orange-800 text-center">Bill</h2>
        <div className=" space-y-10 mt-6">
            {order.length === 0 ? (
                <p className="font-black text-orange-400 text-center">Empty order</p>
            )
            : (
                order.map((item) => (
                    
                    <div 
                        key = {item.id}
                        className="flex justify-between border-t border-gray-300 pt-9 last-of-type:border-b last-of-type:pb-9"
                    >
                        <div className=" justify-start">
                            <p className="text-lg">{item.name} - {formatPrice(item.price)}</p> 
                            <p className="font-black">Selected: {item.quantity} - {formatPrice(item.price * item.quantity)}</p>
                        </div>
                       <div className=" justify-end">
                        <button
                                className=" bg-red-600 text-white rounded-full h-8 w-8 font-bold mt-2"
                            >
                                X
                            </button>
                       </div>
                    </div>
                ))
            )}
        </div>

    </div>
  )
}
