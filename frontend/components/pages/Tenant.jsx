import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaintenanceModal from "../MaintenanceModal/MaintenanceModal";
import "./Tenant.scss";
import TermNotice from "../assets/termination-notice.pdf";
import MoveOutChecklist from "../assets/move-out-checklist.pdf";
import RentalApp from "../assets/rental-app.pdf";

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
        <section className="tenantContent__container--top">
          <h3 className="title">Tenant Resources</h3>
          <ul className="tenantResources">
            <li className="tenantResources__item">
              <a
                className="tenantResources__link"
                href={RentalApp}
                target="_blank"
              >
                Rental Application
              </a>
            </li>
            <li className="tenantResources__item">
              <a
                className="tenantResources__link"
                href={TermNotice}
                target="_blank"
              >
                Notice of Termination
              </a>
            </li>
            <li className="tenantResources__item">
              <a
                className="tenantResources__link"
                href={MoveOutChecklist}
                target="_blank"
              >
                Move Out Checklist
              </a>
            </li>
          </ul>
        </section>
        <section className="tenantContent__container--bottom">
          <h3 className="title">Maintenance Request</h3>
          <p>
            Please describe the problem in as much detail as possible.
            <br />
            Once submitted, a property manager should contact you within 24
            hours.
          </p>

          <button
            onClick={handleOpenMaintenanceModal}
            className="maintenanceRequest__button"
          >
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
