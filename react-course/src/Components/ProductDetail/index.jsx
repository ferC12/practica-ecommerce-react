import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed items-center border border-black rounded-lg bg-stone-200 z-30`}>
      <div className="flex justify-between items-center p-6 w-full">
        <h2 className="font-bold text-xl">Detail</h2>
        <div className="top-2 right-2 cursor-pointer">
          <XCircleIcon className="h-6 w-6 text-red-600"
          onClick={() => context.closeProductDetail()}></XCircleIcon>
        </div>
      </div>
      <figure className="px-4">
        <img 
            className="w-full h-full rounded-lg" 
            src={context.productToShow.images[0]} 
            />
      </figure>
      <p className="flex flex-col p-4">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-md">${context.productToShow.title}</span>
        <span className="font-light text-sm">${context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
