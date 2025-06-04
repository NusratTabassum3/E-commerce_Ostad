import { Star, Heart } from "lucide-react";
const Product = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 cursor-pointer">
        <img src="/shoes.png" alt="Shoes" className="w-full" />
        <h3 className="font-semibold text-xl ">
          Ultraboost Light Runnig Shoes
        </h3>
        <p className="text-gray-400">Running Shoes</p>
        <div className="flex justify-between">
          <span className="flex items-center gap-3">
            <Star className="text-yellow-400 fill-yellow-400" />
            5.0(10Reviews)
          </span>
          <span className="text-green-500 text-sm font-semibold">In Stock</span>
        </div>
        <span className="font-bold text-2xl">$100</span>
        <div className="flex justify-between items-center gap-3">
          <button className="flex-grow bg-black text-white text-center py-3 rounded-md">
            +Add to Cart
          </button>
          <button className="py-3 bg-gray-300 px-3 rounded-md">
            <Heart></Heart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
