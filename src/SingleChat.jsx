import React from "react";

const SingleChat = ({ id, image, name, message, time }) => {
  return (
    <>
      <div className="d-flex justify-content-between border my-2 p-2">
        <div className="d-flex align-items-center gap-2">
          <img
            width={60}
            height={60}
            src={image}
            alt=""
            className="rounded-circle"
          />
          <div className="d-flex flex-column">
            <h6 className="p-0 m-0">{name} 😜</h6>
            <p className="text-secondary p-0 m-0">{message}</p>
          </div>
        </div>
        <h6 className="text-secondary">{time}</h6>
      </div>
    </>
  );
};

export default SingleChat;
