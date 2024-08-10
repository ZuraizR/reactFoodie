import React, { useContext, useEffect } from 'react'

import './Menu.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import SideBar from '../../components/SideBar/SideBar'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { StoreContext } from '../../context/StoreContext'

const Menu = () => {
  const { loadMoreItems, category } = useContext(StoreContext)

  const handleScrollEventListener = (footerHeight) => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight - 600
      ) {
        loadMoreItems()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const footerEl = document.querySelector('.footer')
    const footerHeight = footerEl.offsetHeight
    window.addEventListener('scroll', () =>
      handleScrollEventListener(footerHeight)
    )
    return () => window.removeEventListener('scroll', handleScrollEventListener)
  }, [category])

  return (
    <>
      <div className='menu-heading overlay'>Our Menu</div>
      <ExploreMenu />
      <div className='food-display container' id='food-display'>
        {/* <h2 className='heading-underline'>Top Dishes Near You</h2> */}
        {/* <div className='food-display-list'>
          {food_list.map((item, index) => {
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
        <h2 className='heading-underline our-menu-heading'>Our Menu</h2>
        <div className='display-grid'>
          <SideBar />
          <FoodDisplay />
        </div>
        {/* Load More Button */}
        {/* {visibleItemsCount < filteredItems.length && (
          <button className='load-more' onClick={loadMoreItems}>
            Load More
          </button>
        )} */}
      </div>
    </>
  )
}

export default Menu
