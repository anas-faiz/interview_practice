import { React, useState } from "react";
import "./styles.css";

function ConfirmationModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [displayAction, setDisplayAction] = useState(false);

  function handleConfirmationClick() {
    setIsModalOpen(false);
    setIsConfirmed(true);
    setDisplayAction(true);
  }

  function handleCancelClick() {
    setIsModalOpen(false);
    setDisplayAction(true);
    setIsConfirmed(false);
  }

  return (
    <div className="modal-container">
      <button
        className="open-modal-btn"
        data-testid="open-modal-button"
        onClick={() => setIsModalOpen(true)}
      >
        Open Confirmation Modal
      </button>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-box" data-testid="confirmation-modal">
            <h2 className="modal-title" data-testid="modal-title">
              Confirm Action
            </h2>
            <p className="modal-message" data-testid="modal-message">
              Are you sure you want to proceed?
            </p>

            <div className="modal-buttons">
              <button
                className="confirm-btn"
                data-testid="confirm-button"
                onClick={handleConfirmationClick}
              >
                Confirm
              </button>

              <button
                className="cancel-btn"
                data-testid="cancel-button"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {displayAction && (
        <div className="action-status" data-testid="action-status">
          {isConfirmed ? "Confirmed" : "Cancelled"}
        </div>
      )}
    </div>
  );
}

export default ConfirmationModal;
