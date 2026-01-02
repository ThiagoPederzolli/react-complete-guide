import { isEmail, isNotEmpty, validatePostalCode } from "./validation";

export async function checkoutAction(prevFormState, formData) {
  const fullName = formData.get('full-name');
  const email = formData.get('email');
  const street = formData.get('street');
  const postalCode = formData.get('postal-code');
  const city = formData.get('city');
  const cartItems = JSON.parse(formData.get('cart-items') || '[]');
  const errors = [];
  const values = {
    fullName,
    email,
    street,
    postalCode,
    city
  };

  if(!isNotEmpty(fullName)) {
    errors.push('Please, provide your full name.');
  }

  if(!isEmail(email)) {
    errors.push('Please, provide a correct email address.');
  }  

  if(!isNotEmpty(street)) {
    errors.push('Please, provide a street address');
  }

  if(!isNotEmpty(postalCode) || !validatePostalCode(postalCode)) {
    errors.push('Please, provide a valid Postal Code');
  }

  if(!isNotEmpty(city)) {
    errors.push('Please, provide a city');
  }

  if(errors.length) {
    return {
      errors,
      values,
      success: false
    };
  }

  try {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items: cartItems,
          customer: {
            name: fullName,
            email,
            street,
            'postal-code': postalCode,
            city
          }
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        errors: [errorData.message || 'Failed to submit order. Please try again.'],
        values,
        success: false
      };
    }

    // Success
    return {
      errors: null,
      values: null,
      success: true
    };
  } catch (error) {
    return {
      errors: [error.message || 'Network error. Please check your connection and try again.'],
      values,
      success: false
    };
  }
}