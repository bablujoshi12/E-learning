import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout({ cart, removeFromCart, purchaseCourses, user }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some courses to get started with your learning journey!</p>
          <button className="browse-btn" onClick={() => navigate('/paid-courses')}>
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  const subtotal = cart.reduce((sum, course) => sum + course.price, 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  const handlePurchase = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const success = purchaseCourses();
    
    if (success) {
      setPaymentSuccess(true);
      setTimeout(() => {
        navigate('/my-courses');
      }, 3000);
    }
    
    setIsProcessing(false);
  };

  if (paymentSuccess) {
    return (
      <div className="checkout-container">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>Payment Successful!</h2>
          <p>Your courses have been added to your library. You can now start learning!</p>
          <p>Redirecting to your courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-content">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="cart-items">
            {cart.map((course, index) => (
              <div key={index} className="cart-item">
                <div className="course-info">
                  <div className="course-thumbnail">
                    <span className="course-icon">{course.icon}</span>
                  </div>
                  <div className="course-details">
                    <h3>{course.title}</h3>
                    <p>by {course.instructor}</p>
                    <div className="course-meta">
                      <span>⏱️ {course.duration}</span>
                      <span>📚 {course.lessons} lectures</span>
                    </div>
                  </div>
                </div>
                <div className="course-price">
                  <span className="price">₹{course.price}</span>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(course.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="price-breakdown">
            <div className="price-row">
              <span>Subtotal ({cart.length} items)</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>GST (18%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="price-row total">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="payment-section">
          <h2>Payment Method</h2>
          
          <div className="payment-methods">
            <label className="payment-method">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="method-icon">💳</span>
              <span>Credit/Debit Card</span>
            </label>
            
            <label className="payment-method">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="method-icon">📱</span>
              <span>UPI</span>
            </label>
            
            <label className="payment-method">
              <input
                type="radio"
                name="payment"
                value="netbanking"
                checked={paymentMethod === 'netbanking'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="method-icon">🏦</span>
              <span>Net Banking</span>
            </label>
          </div>

          {paymentMethod === 'card' && (
            <div className="card-form">
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
            </div>
          )}

          {paymentMethod === 'upi' && (
            <div className="upi-form">
              <div className="form-group">
                <label>UPI ID</label>
                <input type="text" placeholder="username@upi" />
              </div>
            </div>
          )}

          {paymentMethod === 'netbanking' && (
            <div className="netbanking-form">
              <div className="form-group">
                <label>Select Bank</label>
                <select>
                  <option>Select your bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Punjab National Bank</option>
                </select>
              </div>
            </div>
          )}

          <div className="purchase-summary">
            <div className="summary-row">
              <span>Total Amount</span>
              <span className="total-amount">₹{total.toFixed(2)}</span>
            </div>
            <button 
              className="purchase-btn"
              onClick={handlePurchase}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing Payment...' : 'Complete Purchase'}
            </button>
            <p className="guarantee">
              ✅ 30-Day Money-Back Guarantee • Secure Payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout; 