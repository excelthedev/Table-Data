import React, { useState } from "react";

const Table = ({ fulldata }) => {
  const [message, setMessage] = useState("");

  return (
    <>
      <div className='central'>
        <div className='form'>
          <input
            type='text'
            placeholder='Search here..'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <table className='tg'>
          <thead>
            <tr className='heading'>
              <td>Serial No</td>
              <td>FullName</td>
              <td>Phone Number</td>
              <td>Email Address</td>
              <td>Street</td>
            </tr>
          </thead>
          {/* {fulldata.map((prodata, index) => (
          <>
            <tbody>
              <tr key={prodata.id}>
                <td>{index + 1}</td>
                <td>{prodata.name}</td>
                <td>{prodata.phone}</td>
                <td>{prodata.email}</td>
                <td>
                  {prodata.address.street} {", "} {prodata.address.suite} {", "}{" "}
                  {prodata.address.city}
                </td>
              </tr>
            </tbody>
          </>
        ))} */}

          {fulldata.map((data, i) => (
            <>
              <tbody>
                <tr key={data.id}>
                  <td>{i + 1}</td>
                  <td>
                    {data.name.firstname} {""} {data.name.lastname}
                  </td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>
                    {data.address.number} {", "} {data.address.street} {", "}{" "}
                    {data.address.city}
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
};

export default Table;
