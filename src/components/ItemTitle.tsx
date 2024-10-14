export type ItemTitleType = {
    itemTitle:string | undefined;
}

export const ItemTitle = ({itemTitle}:ItemTitleType) => {
    
    let ittitle = itemTitle ? (itemTitle.length > 50 ? itemTitle.substring(0,50) + "..." : itemTitle) : '';
    
    return(
        <p className="item-title">{ittitle}</p>
    )
}