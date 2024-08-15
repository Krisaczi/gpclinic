import React, { useState } from "react";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phoneNumber });
    setName("");
    setPhoneNumber("");
  };
  return (
    <form>
      <div className="form-group">
        <label for="name">Name</label>

        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control"
          placeholder="Enter your name"
          aria-describedby="helpId"
        />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>

        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="form-control"
          placeholder="Enter your phone number"
          aria-describedby="helpId"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>

        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="form-control"
          placeholder="Enter your phone number"
          aria-describedby="helpId"
        />
      </div>
    </form>
  );
};

export default AppointmentForm;
