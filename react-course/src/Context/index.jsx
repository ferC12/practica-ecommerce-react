import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)

  //Product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () =>  setIsProductDetailOpen(true)
  const closeProductDetail = () =>  setIsProductDetailOpen(false)

  //Product detail - show productos
  const [productToShow, setProductToShow] = useState({})

  return (
      <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}>
        {children}  
      </ShoppingCartContext.Provider>
      
  )
}