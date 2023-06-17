import React from "react";

const Table = ({ fulldata }) => {
  return (
    <div className='central'>
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
        {fulldata.map((prodata, index) => (
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
        ))}
      </table>
    </div>
  );
};

export default Table;
