import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)

  //Product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () =>  setIsProductDetailOpen(true)
  const closeProductDetail = () =>  setIsProductDetailOpen(false)

  //Checkout side menu - open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(false)

  //Product detail - show productos
  const [productToShow, setProductToShow] = useState({})

  //Shopping cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  //Shopping Cart - order
  const [order, setOrder] = useState([])

  return (
      <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
      }}>
        {children}  
      </ShoppingCartContext.Provider>
      
  )
}