import { formatCurrency } from '../../utils/helpers';
import DeleteItem from '../../ui/DeleteItem';
import UpdateQuantity from './UpdateQuantity';
import { getCurrentQuantity } from './cartSlice';
import { useSelector } from 'react-redux';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <UpdateQuantity currentQuantity={currentQuantity} id={pizzaId} />
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
