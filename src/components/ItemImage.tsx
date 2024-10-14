
export type ItemImageType = {
    itemRef: string | undefined;
    imgSrc: string | undefined;
}

export const ItemImage = ({itemRef,imgSrc}:ItemImageType) => {
    return(
        <div className="item-image">
            <a href={itemRef}>
                <img src={imgSrc}/>
            </a>    
        </div>
    )
}