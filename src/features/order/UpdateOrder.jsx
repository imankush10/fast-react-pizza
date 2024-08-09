import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">MAKE PRIORITY</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
