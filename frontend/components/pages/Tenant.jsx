import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MaintenanceModal from "../MaintenanceModal/MaintenanceModal";

const Tenant = () => {
  const [isMaintenanceModalOpen, setMaintenanceModalOpen] = useState(false);

  const handleOpenMaintenanceModal = () => {
    setMaintenanceModalOpen(true);
  };

  const handleCloseMaintenanceModal = () => {
    setMaintenanceModalOpen(false);
  };

  const handleFormSubmit = () => {
    handleCloseMaintenanceModal();
  };

  return (
    <>
      <main>
        <section className="Tenant Services">
          <h1>Tenant Services</h1>
          <button onClick={handleOpenMaintenanceModal}>
            Maintenance Request
          </button>

          <MaintenanceModal
            isOpen={isMaintenanceModalOpen}
            onSubmit={handleFormSubmit}
            onClose={handleCloseMaintenanceModal}
          />

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
