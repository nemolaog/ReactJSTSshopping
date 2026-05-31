import { CartSummaryProps } from './CartSummary.types';

/**
 * CartSummary component
 * Displays total cart items and total cart amount.
 */
function CartSummary({ totalItems, totalAmount }: CartSummaryProps) {
    return (
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between text-lg text-gray-700 mb-2">
                <span>Total Items</span>
                <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-2xl font-bold text-gray-900">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>

            {/* Checkout is not implemented yet */}
            <button
                type="button"
                disabled
                className="mt-6 w-full bg-gray-400 text-white py-3 rounded-lg cursor-not-allowed"
            >
                Checkout Coming Soon
            </button>
        </div>
    );
}

export default CartSummary;