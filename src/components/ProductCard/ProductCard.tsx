import {ProductCardProps} from './ProductCard.types';
import {Link} from "react-router-dom";
import { useCartStore } from '../../store/cartStore';


/**
 * ProductCard component
 * Responsible for displaying individual product information
 */
function ProductCard({product}: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    /**
     * Adds the current product to the global cart store.
     * aaa
     */
    function handleAddtoCart() {
        addItem(product);
    }

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all">
            {/* Clickable product information area */}
            <Link
                to={`/products/${product.id}`} className="block"
            >
                {/* Product image */}
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                />

                <div className="p-4">

                    {/* Product title */}
                    <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">
                        {product.title}
                    </h3>

                    {/* Product price */}
                    <p className="text-2xl font-bold text-blue-600 mt-2">
                        ${product.price.toFixed(2)}
                    </p>

                    {/* Product category */}
                    <p className="text-sm text-gray-500 mt-1">
                        {product.category}
                    </p>
                </div>
            </Link>
            <div className="p-4">
                {/* Add to cart button */}
                <button
                    type="button"
                    onClick={handleAddtoCart}
                    className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;