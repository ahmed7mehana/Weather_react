import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.GetWeather}>
      <input type="text" name="city" placeholder="city.." />
      <input type="text" name="country" placeholder="country.." />
      <button className="btn"> get weather ..!</button>
    </form>
  );
};

export default Form;
