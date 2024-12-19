import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreseItemQuantity, inceaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Button
        type="round"
        onClick={() => dispatch(decreseItemQuantity(pizzaId))}
      >
        -
      </Button>

      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(inceaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
