import React from "react";

const Weather = (props) => {
  return (
    <div>
      {props.tempreature && (
        <p>
          <span> Tempreature</span> : {props.tempreature}
        </p>
      )}
      {props.city && (
        <p>
          {" "}
          <span> city</span> : {props.city}{" "}
        </p>
      )}
      {props.country && (
        <p>
          {" "}
          <span> country</span> :{props.country}{" "}
        </p>
      )}
      {props.humidity && (
        <p>
          {" "}
          <span> humidity</span> :{props.humidity}
        </p>
      )}
      {props.description && (
        <p>
          {" "}
          <span> description</span> : {props.description}
        </p>
      )}
      {props.erorr && <p> {props.erorr}</p>}
    </div>
  );
};

export default Weather;
