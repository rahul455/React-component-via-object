/* eslint-disable */

import React from "react";

interface UserProps {
  name: string;
  description?: string;
  color?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  role?: string;
}

export default function User(props: UserProps) {
  const {
    name = "",
    description = "default desc",
    color = "purple",
    backgroundColor = "grey",
    children,
    role,
    ...rest
  } = props;

  return (
    <>
      <h4>Name : {name}</h4>
      <h5>Description: {description}</h5>
      {role && <h5>Role : {role}</h5>}
      <div
        style={{
          padding: "30px",
          width: "250px",
          height: "250px",
          color,
          backgroundColor
        }}
      >
        {children ?? "Default content"}
      </div>
      <br />
      <hr />
    </>
  );
}
