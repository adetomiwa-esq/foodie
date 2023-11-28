import React from 'react';
import { OfferList } from './OfferList'

export default function Right({id}) {
  console.log(id)

  
  return (
    <section>
      {
        OfferList.filter(x => x.id === id).map((x, index) => (
          <div key={index}>
            <img src={x.imgSrc} alt='' />
          </div>
        ))
      }
    </section>
  )
}
