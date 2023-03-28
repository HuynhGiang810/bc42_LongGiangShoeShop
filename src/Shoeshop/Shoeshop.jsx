import React from 'react'
import data from "./data.json"
import ShoeItem from './ShoeItem'


function Shoeshop() {
  return (
    <div className="container">
        <h1 className="text-center">Giang Shoe</h1>
        <div className="row">
            {data.map((item) => {
                return (
                    <div key={item.id} className="col-sm-4">
                        <ShoeItem item={item}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shoeshop