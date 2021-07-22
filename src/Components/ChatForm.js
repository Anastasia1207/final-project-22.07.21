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
    <button
      type="submit"
      className="btn btn loading .offset-md-2"
      style={{ color: "#16A085" }}
      disabled={true}
    >
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />{" "}
      Sending...
    </button>
  ) : (
    <button
      type="submit"
      className="btn btn"
      style={{
        backgroundColor: "#16A085",
        color: "white",
        width: "120px",
      }}
    >
      Send
    </button>
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group p-2">
        <label style={{ paddingBottom: "10px" }} htmlFor="username">
          Username:
        </label>
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
      <div className="col-md-12 form-group p-2  ">
        <label style={{ paddingBottom: "10px" }} htmlFor="message">
          Message:
        </label>
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
      <div className="row">
        <div className="btn p-2 ">{button}</div>
      </div>
    </form>
  );
}

export default ChatForm;
