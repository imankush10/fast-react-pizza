import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuanitity, increaseItemQuanitity } from './cartSlice';

export default function UpdateQuantity({ currentQuantity, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={() => dispatch(decreaseItemQuanitity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuanitity(id))}>
        +
      </Button>
    </div>
  );
}
