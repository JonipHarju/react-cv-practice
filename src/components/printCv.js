import React from "react";

const PrintCv = (props) => {
  const { cv, banana, blackBerry } = props;

  return (
    <ul id="cvList">
      {cv.map((value, i) => {
        return (
          <div key={i}>
            <li key={i}>{value}</li>
            <button onClick={banana}>Edit</button>
            <button onClick={blackBerry}>Remove</button>
          </div>
        );
      })}
    </ul>
  );
};

export default PrintCv;
