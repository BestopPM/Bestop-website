import React from "react";
import { useState } from "react";
import MaintenanceModal from "../MaintenanceModal";
import { Link } from "react-router-dom";

const Tenant = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <main>
        <section className="Tenant Services">
          <h1>Tenant Services</h1>
          <button
            classNmae="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Maintenance Request
          </button>
          {openModal && <MaintenanceModal closeModal={setOpenModal} />}
          <p>
            Please describe the problem in as much detail as possible. Attach
            photos or video can help property manager hire the right vendor for
            the repair job. Once submitted, property manager should contact you
            within 24 hours.
          </p>
          <Link to="/contact"> Contact Us </Link>
        </section>

        <section className="Tenant Resources">
          <h1>Tenant Services</h1>
          <ul>
            <li>Move Out Notice</li>
            <li>Move Out Cleaning Instructions</li>
            <li>Move Out Forwarding Address</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Tenant;
