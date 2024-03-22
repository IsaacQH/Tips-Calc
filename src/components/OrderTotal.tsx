
import { useMemo } from "react"
import { formatPrice } from "../helpers"
import type { Orderitem } from "../types"

type OrdertotalProp = {
    order: Orderitem[]
}

export const OrderTotal = ({order}:OrdertotalProp) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity),0)
    , [order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Tip & Total </h2>
            <p>Subtotal: 
                <span className="font-bold"> {formatPrice(subtotalAmount)}</span>
            </p>

            <p>Tip: 
                <span className="font-bold"> %%</span>
            </p>

            <p>TOTAL: 
                <span className="font-bold"> $$</span>
            </p>

        </div>

        <button>Send Order</button>
    </>
  )
}
