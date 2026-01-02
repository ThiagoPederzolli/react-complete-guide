import { useActionState, useContext, useEffect } from "react";
import { checkoutAction } from "../util/checkoutAction";
import { ShoppingCartContext } from "../store/cart-context";

function CheckoutForm({ onCloseModal, onSuccess  }) {
  const { cartItems, handleClearCart } = useContext(ShoppingCartContext)
  const [formState, formAction, pending] = useActionState(checkoutAction, { 
    errors: null, 
    values: null,
    success: false,
  });

  useEffect(() => {
    if (formState.success && onSuccess) {
      onSuccess();
      handleClearCart();
    }
  }, [formState.success, onSuccess]);


  return (
    <form action={formAction}>
      <input 
        type="hidden" 
        name="cart-items" 
        value={JSON.stringify(cartItems)} 
      />
      <div className="control">
        <label htmlFor="full-name">Full Name</label>
        <input 
          type="text" 
          id="full-name" 
          name="full-name" 
          defaultValue={formState.values?.fullName || ''} 
        />
      </div>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          defaultValue={formState.values?.email || ''} 
        />
      </div>

      <div className="control">
        <label htmlFor="street">Street</label>
        <input 
          id="street" 
          type="text" 
          name="street" 
          defaultValue={formState.values?.street || ''} 
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="postal-code">Postal Code</label>
          <input 
            id="postal-code" 
            type="text" 
            name="postal-code" 
            defaultValue={formState.values?.postalCode || ''} 
          />
        </div>

        <div className="control">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            defaultValue={formState.values?.city || ''}
          />
        </div>
      </div>

      {formState.errors && (
        <ul className="error">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <p className="modal-actions">
        <button 
          type="button" 
          className="text-button" 
          onClick={onCloseModal}
          disabled={pending}
        >
          Close
        </button>
        <button className="button" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit Order'}
        </button>
      </p>
    </form>
  );
}

export default CheckoutForm;