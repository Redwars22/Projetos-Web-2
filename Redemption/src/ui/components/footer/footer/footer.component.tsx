import React from 'react';
import FeedbackComponent from '../feedback/feedback.component';
import FooterTextComponent from '../footer-text/footer-text.component';
import './footer.style.css';

export default function FooterComponent() {
  return (
    <div className="footer">
      <FooterTextComponent />
      <FeedbackComponent />
    </div>
  );
}
