/* eslint-disable */
import React from "react";
import Box from "./box";
import "./styles.css";
import User from "./user";

export interface ObjectInteface {
  id?: number;
  component?: React.ReactNode;
  dataProps?: {
    name?: string;
    backgroundColor?: string;
    color?: string;
    description?: string;
  };
}
export default function App() {
  const props = {
    name: "Sending Props via Destructuring",
    backgroundColor: "red",
    color: "white",
    description:
      "sending component via object and passign props as destructuring object."
  };
  const props1 = {
    name: "sending component as children",
    backgroundColor: "violet",
    color: "blue",
    description:
      "sending component as chldren to the existing component from object."
  };
  const props2 = {
    name: "rahul2",
    backgroundColor: "blue",
    color: "pink",
    description:
      "While merging props and using destructuring second props value overwrites first prop value."
  };
  const props3 = {
    name: "Sending props data",
    backgroundColor: "blue",
    color: "pink",
    description: "Sending props data as it is."
  };

  const myObj: ObjectInteface[] = [
    {
      id: 1,
      component: <User {...props} />
    },
    {
      id: 2,
      component: (
        <User {...props1}>
          <Box />
        </User>
      )
    },
    {
      id: 3,
      component: (props) => User({ ...props2, ...props }),
      dataProps: {
        name: "merge props",
        backgroundColor: "yellow",
        color: "green"
      }
    },
    {
      id: 4,
      component: (props) => User({ role: "learner", ...props }),
      dataProps: {
        name: "sending extra prop",
        backgroundColor: "maroon",
        color: "white",
        description:
          "sending extra prop at a later stage and merging to existing props"
      }
    },
    {
      id: 5,
      component: User(props3)
    }
  ];

  const _renderCell = (data, index: number = 0) => {
    if (data?.dataProps) {
      return (
        <React.Fragment key={index}>
          {React.createElement(
            data.component,
            data?.dataProps,
            "Div Content created from createElement as children"
          )}
        </React.Fragment>
      );
    }

    return <React.Fragment key={index}>{data?.component}</React.Fragment>;
  };

  return (
    <div className="App">
      <h3>React JSX via Object</h3>
      <b style={{ color: "red" }}>
        Note : Prior knowledger of object destructuring and sending data as
        props to components is required as a prerequsite.
      </b>
      <hr />
      {myObj.map((col, index) => (
        <>{_renderCell(col, index)}</>
      ))}
    </div>
  );
}
