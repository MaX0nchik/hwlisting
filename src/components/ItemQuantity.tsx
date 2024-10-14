export type ItemQuantityType = {
    itemquantity: number | undefined;
}

export const ItemQuantity = ({itemquantity}:ItemQuantityType) => {
    let levelQuantity = itemquantity ? (itemquantity <= 10 ? "level-low" : (itemquantity <= 20 ? "level-medium" : "level-high")) : "level-low";
    
    return(
        <p className={"item-quantity " + levelQuantity}>{itemquantity} left</p>
    )
}