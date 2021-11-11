import cartLogo from "../../images/cartIcon.png";
import { useCartContext } from "../../Contexts/CartContext";
export function CartIconLogo() {
    const { itemQuantity } = useCartContext();

    if (itemQuantity > 0) {
        return (
            <>
                <img src={cartLogo} alt="CartIcon" />
                <p className="black">{itemQuantity}</p>
            </>
        );
    }

    return <></>;
}
