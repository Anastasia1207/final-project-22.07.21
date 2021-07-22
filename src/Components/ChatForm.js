import React, { useState } from "react";

function ChatForm({ onSubmit }) {
  const [isLoading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    message: "",
    username: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
      timestamp: Date.now(),
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      onSubmit(formValue);
      setLoading(false);
      setFormValue({
        message: "",
        username: "",
      });
    }, 1000);
  };

  const button = isLoading ? (
    <button type="submit" className={`btn btn-primary loading`} disabled={true}>
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />{" "}
      Sending...
    </button>
  ) : (
    <button type="submit" className={`btn btn-primary`}>
      Send
    </button>
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Enter username"
          required={true}
          disabled={isLoading}
          value={formValue.username}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          placeholder="Enter message"
          className="form-control"
          id="message"
          rows="3"
          name="message"
          required={true}
          disabled={isLoading}
          value={formValue.message}
          onChange={handleInputChange}
        />
      </div>
      {button}
    </form>
  );
}

export default ChatForm;
