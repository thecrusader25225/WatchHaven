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
          <div className="w-full h-auto p-4 flex items-center justify-between border">
            <span className="flex w-2/3 justify-between items-center">
              <span className="flex items-center">
                <img
                  src={item.img}
                  alt="img"
                  className="cardImg mx-2 w-20 h-20 min-w-20 min-h-20"
                />
                <span className="flex flex-col">
                  <p className="name">{item.name}</p>
                  <p className="brand">Brand: {item.brand}</p>
                  <p className="style">
                    {item.style} | {item.type}
                  </p>
                </span>
              </span>
              <p className="p-4 font-bold">x{item.count}</p>
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
