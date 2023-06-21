import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed items-center right-1 border border-black rounded-lg bg-stone-200`}
    >
      <div className="flex justify-between items-center p-6 w-full">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-red-700 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XCircleIcon>
        </div>
      </div>
      <div className="px-6">
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id} 
              title={product.title} 
              imageUrl={product.images} 
              price={product.price} 
            />
          ))
        }
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
