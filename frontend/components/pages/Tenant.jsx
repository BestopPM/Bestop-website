import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaintenanceModal from "../MaintenanceModal/MaintenanceModal";
import "./Tenant.scss"

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
      <header className="header">Tenant Services</header>
      <main className="tenantContent__container">
        <section className="tenantContent__container--left">
          <h3 className="title">Tenant Resources</h3>
          <ul className="tenantResources">
            <li className="tenantResources__item">Move Out Notice</li>
            <li className="tenantResources__item">Move Out Cleaning Instructions</li>
            <li className="tenantResources__item">Move Out Forwarding Address</li>
          </ul>
        </section>
        <section className="tenantContent__container--right">
          <h3 className="title">Maintenance Request</h3>
          <p>
            Please describe the problem in as much detail as possible.
            <br />
            Once submitted, a property manager should contact you
            within 24 hours.
          </p>

          <button onClick={handleOpenMaintenanceModal} className="maintenanceRequest__button">
            Maintenance Request
          </button>

          <MaintenanceModal
            isOpen={isMaintenanceModalOpen}
            onSubmit={handleFormSubmit}
            onClose={handleCloseMaintenanceModal}
          />

          <div>
            <Link to="/contact"> Contact Us </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tenant;
