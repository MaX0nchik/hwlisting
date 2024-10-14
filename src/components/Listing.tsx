import { ItemImage } from "./ItemImage";
import { ItemPrice } from "./ItemPrice";
import { ItemQuantity } from "./ItemQuantity";
import { ItemTitle } from "./ItemTitle";
import { ItemType } from "./ItemType"


export type ListingType = {
    items: ItemType[];
}

export const Listing = ({items}:ListingType) => {

    return(
        <div className="item-list">
          {items.map((item)=> { 
            return(
                <div className="item" key={item.listing_id}>{
                    (item.MainImage && item.MainImage.url_570xN) ?
                    <ItemImage itemRef={item.url} imgSrc={item.MainImage?.url_570xN}/> : ''
                }
                    <div className="item-details">
                        <ItemTitle itemTitle={item.title}/>
                        <ItemPrice itemcurrency={item.currency_code} itemprice={item.price}/>
                        <ItemQuantity itemquantity={item.quantity}/>
                    </div>
                </div>
            )              
            })} 
            
        </div>
    );
};

const defaultProps : ListingType = {
    items: []
  };
  
  Listing.defaultProps = defaultProps;
