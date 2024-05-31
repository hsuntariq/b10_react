import React from "react";
import SingleChat from "./SingleChat";
import { data } from "./data";
const Container = () => {
  return (
    <>
      <div className="container col-lg-3 mx-auto p-4">
        {data.map((item, index) => {
          return <SingleChat {...item} />;
        })}
      </div>
    </>
  );
};

export default Container;
