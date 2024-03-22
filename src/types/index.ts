
//Tipo de dato para el menu de items
export type Menuitem = {
    id: number,
    name: string,
    price: number
}

//Tipo para el dato de orden
export type Orderitem = Menuitem & {    //Alberga lo mismo que Menuitem pero se añade quantity
    quantity: number
}