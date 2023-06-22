import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed items-center right-1 border border-black rounded-lg bg-stone-200`}
    >
      <div className="flex justify-between items-center p-6 w-full bg-slate-300 mb-2">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-red-700 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XCircleIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id} 
              id={product.id} 
              title={product.title} 
              imageUrl={product.images} 
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-6 mb-2">
        <p className="flex justify-between items-center w-full mr-20">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
