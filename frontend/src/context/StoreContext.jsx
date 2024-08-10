import { createContext, useState } from 'react'
import { food_list } from '../assets/assets'

import { toast } from 'react-toastify'

export const StoreContext = createContext(null)

const StoreContextProvider = ({ children }) => {
  // Cart Product Items State
  const [cartItems, setCartItems] = useState({})
  // Menu Items Category State
  const [category, setCategory] = useState('All')
  // Show LoginPopup State
  const [showLogin, setShowLogin] = useState(false)
  // Current Login/Signup State
  const [currState, setCurrState] = useState('Sign Up')
  // Filter Search Results State
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState(food_list)
  // Load More State -- Initial is 4
  const [visibleItemsCount, setVisibleItemsCount] = useState(4)
  // Max Price Range State -- Initial is 4
  const [maxPrice, setMaxPrice] = useState(20) // Initial max price for slider
  const [filter, setFilter] = useState('') // Initial max price for slider

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    toast.success('Added Successfully', {
      draggable: true,
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    toast.success('Removed Successfully')
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const handleFilterChange = (value) => {
    // const value = e.target.value.toLowerCase()
    setSearchTerm(value)

    const filtered = food_list.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    )
    setFilteredItems(filtered)
    setVisibleItemsCount(4)
  }

  const loadMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 4)
  }

  const contextValue = {
    food_list,
    cartItems,
    category,
    showLogin,
    currState,
    searchTerm,
    filteredItems,
    visibleItemsCount,
    maxPrice,
    filter,
    setFilter,
    setMaxPrice,
    setVisibleItemsCount,
    setFilteredItems,
    setSearchTerm,
    setCurrState,
    setShowLogin,
    setCategory,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    handleFilterChange,
    loadMoreItems,
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
