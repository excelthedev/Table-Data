import React from "react";
import Table from "./Components/Table";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [tabledata, setTabledata] = useState([
    {
      id: null,
      name: {
        firstname: null,
        lastname: null,
      },
      Phone: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
      },
    },
  ]);

  const getTable = async () => {
    try {
      const response = await fetch("http://localhost:3090/api/v1/getAllUsers");
      const data = await response.json();
      setTabledata(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTable();
  }, []);
  console.log(tabledata);

  return (
    <div>
      <Table fulldata={tabledata} />
    </div>
  );
};

export default App;
