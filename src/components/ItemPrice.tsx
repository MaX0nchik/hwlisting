export type ItemPriceType = {
    itemcurrency : string | undefined;
    itemprice : string | undefined;
}

export const ItemPrice = ({itemcurrency,itemprice}:ItemPriceType) => {
    let price = (itemcurrency&&itemprice) ? (itemcurrency === "USD" ? "$" + itemprice : (itemcurrency === "EUR" ? "€" + itemprice : itemprice + ' ' + itemcurrency)):'';
    return (
        <p className="item-price">{price}</p>
    )
}