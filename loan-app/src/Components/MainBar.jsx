import React, { useState } from "react";
import "./MainBar.css";
import Message from "./Message";
export default function MainBar() {
  const [user, setUserData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    range: "Less than 1500",
  });

  const isOK = user.name && user.phoneNumber && user.age;
  let element = null;

  return (
    <div>
      <form
        action="submit"
        onSubmit={(event) => {
          event.preventDefault();
          if (user.age < 18 || user.age > 65) {
            return <Message message="The age is not Allowed" className={"message"}></Message>;
          } else if (
            user.phoneNumber.length > 10 ||
            user.phoneNumber.length < 8
          ) {
            return <Message message="The Phone Number is not Allowed" className={"message"}></Message>;
          }
          else
          {
            return (
              <Message
                message="The request has been submitted successfullty"
                className={"succeed"}
              ></Message>
            );
          }
        }}
      >
        <header className="title">
          <h2>Requesting a loan</h2>
        </header>
        <hr />
        <label>
          <p className="title">Name:</p>
          <input
            type="text"
            onChange={(event) => {
              setUserData({ ...user, name: event.target.value });
            }}
          />
        </label>
        <label>
          <p className="title">Phone Number:</p>
          <input
            type="text"
            onChange={(event) => {
              setUserData({ ...user, phoneNumber: event.target.value });
            }}
          />
        </label>
        <label>
          <p className="title">Age:</p>
          <input
            type="number"
            onChange={(event) => {
              setUserData({ ...user, age: event.target.value });
            }}
          />
        </label>
        <label>
          <p className="title">Are you an employee?</p>
          <input
            type="checkbox"
            onChange={(event) => {
              setUserData({ ...user, isEmployee: event.target.checked });
            }}
          />
        </label>
        <label>
          <p className="title">Salary:</p>
          <select
            value={user.range}
            onChange={(event) => {
              setUserData({ ...user, range: event.target.value });
            }}
          >
            <option value="Less than 1500">Less than 1500</option>
            <option value="1500-3500">Between 1500 and 3500</option>
            <option value="More than 3500">More than 3500</option>
          </select>
        </label>
        <button className={!isOK ? "disabled" : "submit"} disabled={!isOK}>
          Submit
        </button>
      </form>
    </div>
  );
}
