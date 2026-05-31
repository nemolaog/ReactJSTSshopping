import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';

/**
 * CartPage component
 * Displays all products currently added to the shopping cart.
 */
function CartPage() {
    const items = useCartStore((state) => state.items);
    const totalItems = useCartStore((state) => state.totalItems);
    const totalAmount = useCartStore((state) => state.totalAmount);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const clearCart = useCartStore((state) => state.clearCart);
    /**
     * Renders an empty cart message when there are no cart items.
     */
    if (items.length === 0) {
        return(
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Shopping Cart
                </h1>

                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                    <p className="text-xl text-gray-700 mb-6">
                        Your cart is empty.
                    </p>
                </div>
                <Link
                    to="/products"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Browse Products
                </Link>
            </div>
        )
    }
return (
    <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
                Shopping Cart
            </h1>

            {/* Clears all cart items */}
            <button
                type="button"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium"
            >
                Clear Cart
            </button>
        </div>

        {/* CartItem*/}
    <div className="space-y-4">
        {items.map((item) => (
            <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onUpdateQuantity={updateQuantity}
            />))}
    </div>
                {/* Item subtotal CartTotal*/}
        <CartSummary
            totalItems={totalItems}
            totalAmount={totalAmount}
        />
    </div>
)}


export default CartPage;








