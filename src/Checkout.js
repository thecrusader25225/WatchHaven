import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Checkout({
  cartItems,
  handleAddItemCount,
  handleSubtractItemCount,
  handleUnlist,
  subtotal,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-full px-4 xl:px-[16%] mx-auto h-full pt-24 flex flex-col overflow-y-auto">
      <span className="flex">
        <IoReturnUpBack onClick={() => navigate("/")} />
        <p>Checkout</p>
      </span>
      <span className="h-auto overflow-y-auto w-full flex flex-col">
        {cartItems.map((item) => (
          <div className="w-full h-16 flex items-center justify-between border">
            <span className="flex w-1/2 justify-between">
              <p>{item.name}</p>
              <p>x{item.count}</p>
            </span>
            <p>Rs. {item.price * item.count} /-</p>
          </div>
        ))}
      </span>
      <span className="flex justify-between">
        <p>Subtotal: </p>
        <p>Rs. {subtotal} /-</p>
      </span>
      <span className="flex justify-between">
        <p>Delivery: </p>
        <p>Rs. 400 /-</p>
      </span>
      <span className="flex justify-between">
        <p>Total: </p>
        <p>Rs. {subtotal + 400} /-</p>
      </span>
      <button className="flex justify-end">Place Order</button>
    </div>
  );
}
