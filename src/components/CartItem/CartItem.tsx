import { CartItemProps } from './CartItem.types';

/**
 * CartItem component
 * Displays a single product inside the shopping cart.
 */
function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4">
            {/* Product image */}
            <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-32 h-32 object-cover rounded-lg"
            />

            <div className="flex-1">
                {/* Product title */}
                <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                </h2>

                {/* Product category */}
                <p className="text-sm text-gray-500 mt-1">
                    {item.category}
                </p>

                {/* Product price */}
                <p className="text-lg font-bold text-blue-600 mt-2">
                    ${item.price.toFixed(2)}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-2 hover:bg-gray-100 transition"
                        >
                            -
                        </button>

                        <span className="px-4 py-2 border-x border-gray-300">
                            {item.quantity}
                        </span>

                        <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-2 hover:bg-gray-100 transition"
                        >
                            +
                        </button>
                    </div>

                    {/* Remove item from cart */}
                    <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        className="text-red-600 hover:text-red-700 font-medium"
                    >
                        Remove
                    </button>
                </div>
            </div>

            {/* Item subtotal */}
            <div className="md:text-right">
                <p className="text-sm text-gray-500">
                    Subtotal
                </p>

                <p className="text-2xl font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default CartItem;



