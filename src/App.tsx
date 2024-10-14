import {Listing} from './components/listing'
import './main.css'
import data from './components/etsy.json'
import { ItemType } from './components/ItemType'

function App() {

  const items: ItemType[] = data.filter(item => item.state == 'active').map((item)=>{
  return (
   {
      listing_id:item.listing_id,
      url:item.url,
      MainImage: item.MainImage ? {
          url_570xN:item.MainImage.url_570xN,
      }:null,
      title:item.title,
      currency_code:item.currency_code,
      price: item.price,
      quantity: item.quantity,
   }
  )
  });

  return(    
    <Listing items={items}/>
  )
}

export default App
