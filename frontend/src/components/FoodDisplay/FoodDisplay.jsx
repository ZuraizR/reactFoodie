import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
// import SideBar from '../SideBar/SideBar'

const FoodDisplay = () => {
  const { category, filteredItems, visibleItemsCount } =
    useContext(StoreContext)

  return (
    <div className='food-display container' id='food-display'>
      {/* <h2 className='heading-underline'>Top Dishes Near You</h2> */}
      {/* Food Display */}
      {/* <div className='food-display-list'>
        {filteredItems.slice(0, visibleItemsCount).map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
        })}
      </div> */}
      <div className='food-display-list'>
        {filteredItems.length === 0 ? (
          <div className='no-items'>
            <h4>No Items to Show</h4>
            <p>Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          filteredItems.slice(0, visibleItemsCount).map((item, index) => {
            if (category === 'All' || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            }
            return null // Return null for unmatched categories
          })
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
