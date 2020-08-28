import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function HomepageBox() {
  return (
    <div className="homepagebox">
      <div className="boxtext">
        This is the Harry Potter world.
      </div>
    </div>
  );
}

ReactDOM.render(<HomepageBox />, document.getElementById("root"));
