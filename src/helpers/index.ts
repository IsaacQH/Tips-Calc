
//Crea función para formatear el texto del precio
export function formatPrice(quantity: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency:'USD'
    }).format(quantity)
}