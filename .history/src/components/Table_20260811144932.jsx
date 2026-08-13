import React, { useState } from "react";
import { users } from "../data/users";
import Button from "./Button";
import TableRow from "./TableRow";

function Table() {
  let [data, setData] = useState(users);
  function handleDelete(id) {
    setData(data.filter((user) => user.id !== id));
  }
  return (
    <table className="w-[90vw]">
      <thead className="bg-gray-100">

      </thead>
      <t
    </table>
  );
}

export default Table;
