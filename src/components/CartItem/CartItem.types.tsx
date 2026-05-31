import { CartItem as CartItemType } from '../../store/cartStore';

/**
 * Props for CartItem component
 */
export interface CartItemProps {
    item: CartItemType;
    onRemove: (productId: number) => void;
    onUpdateQuantity: (productId: number, quantity: number) => void;
}

