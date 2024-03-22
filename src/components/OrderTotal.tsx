
import { useMemo } from "react"
import { formatPrice } from "../helpers"
import type { Orderitem } from "../types"

type OrdertotalProp = {
    order: Orderitem[]
    tip: number,
    placeOrder: () => void
}

export const OrderTotal = ({order, tip, placeOrder}:OrdertotalProp) => {
    //Calcula el subtotal de toto item y precio usando reduce y nota con useMemo
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity),0)
    , [order])
    //Revisa si se cambio tip u order y calcula el tiptotal
    const tipCalc = useMemo( (() => tip * subtotalAmount) , [tip, order])
    const totalAmount = useMemo(() => tipCalc + subtotalAmount,[tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Tip & Total </h2>
            <p>Subtotal: 
                <span className="font-bold"> {formatPrice(subtotalAmount)}</span>
            </p>

            <p>Tip: 
                <span className="font-bold"> {formatPrice(tipCalc)}</span>
            </p>

            <p>TOTAL: 
                <span className="font-bold"> {formatPrice(totalAmount)}</span>
            </p>

        </div>

        <button
            className="w-full text-white font-bold text-xl bg-orange-800 rounded-lg py-2 disabled:opacity-30"
            disabled= {totalAmount===0}
            onClick={ placeOrder}

        >Send Order</button>
    </>
  )
}
