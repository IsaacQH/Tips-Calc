//Será el hook que albergará toda la logica de la orden

import { useState} from "react";

import type { Menuitem, Orderitem } from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<Orderitem[]>([]) //State que alvergará arreglo de objetos de la orden
    const [tip, setTip] = useState<number>(0) //State que capturará la propina

    const addItem = (item: Menuitem) => {

        const itemExist = order.find((orderItem) => orderItem.id === item.id)  //Revisa que exista el item con el mismo id pasado

        if(itemExist){  //Revisamos que exista y en un map, donde el id sea igual al item, creamos un objeto que se le sumará en quiantity, sino el objeto puro. Regresa arreglo completo
            const updatedOrder = order.map((orderItem) => orderItem.id === item.id ? {...item, quantity: orderItem.quantity + 1}: orderItem)
            setOrder(updatedOrder)
        }else{
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem]) //Casteramos
        }
    }

    const removeItem = (id:Menuitem['id']) => {
        console.log("DELETING " + id)
        const updatedOrder = order.filter((orderItem) => orderItem.id !== id)
        setOrder(updatedOrder)
    }

    const placeOrder = () => {
        console.log("SENDING ORDER")
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}