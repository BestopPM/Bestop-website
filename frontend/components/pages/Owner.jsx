import React from "react";
import "./Owner.scss"

const Owner = () => {
  return (
    <>
      <header className="header">Owner Services</header>

      <main className="ownerContent">
        <h3 className="title">Overview</h3>
        <p>
          BESTOP PROPERTY MANAGEMENT takes a customized, individual approach to
          working with property owners. We conduct regular visits, ensuring we
          are proactive about maintenance and working with fairly priced,
          quality vendors to preserve and protect owner’s investments.
        </p>

        <section className="ownerList">
          <p className="ownerList__header">PROPERTY MANAGEMENT includes:</p>
          <ul>
            <li>
              Initial inspection & coordination of work required to get property
              “Rent Ready”
            </li>
            <li>Determining ental price based on market analysis</li>
            <li>Advertising, Showing, and Tenant Screening and Selection </li>
            <li>Move-in Inspection of the Property</li>
            <li>Executing Rental/Lease Agreement and Rent Collection</li>
            <li>Property Repair and Maintenance</li>
            <li>
              Service Legal Notices, Process Evictions and Collections as
              Required
            </li>
            <li>Providing Monthly and Yearly Financial Statement</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Owner;
