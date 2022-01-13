import React from 'react';
import './feedback.style.css';

export default function FeedbackComponent() {
  return (
    <div className="feedback-container">
      <img
        className="feedback-icon"
        src="https://cdn4.iconfinder.com/data/icons/online-shop-7/128/message-talk-feedback-256.png"
      />
      <div className="feedback-left-container">
        <p className="feedback-text">Encontrou algum bug?</p>
        <a
          href="mailto:andrewpereira.megabyte@gmail.com"
          className="pink darken-4 btn-small"
        >
          REPORTAR
        </a>
      </div>
    </div>
  );
}
