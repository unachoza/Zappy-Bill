import React from 'react';
import { MODAL_TEXT } from '../../Constants';
import './InfoModal.scss';

const InfoModal = ({ toggling }) => {
  return (
    <div className="info-modal-container">
      <div className="modal-container show-modal" id="modal ">
        <div className="modal">
          <img
            src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1619580778/icons8-macos-close-32.png"
            className="close-icon"
            onClick={toggling}
            alt="close icon"
          />
          <div className="modal-header">What is Flex Rate ?</div>
          <div className="modal-content">{MODAL_TEXT}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;

//card with icon and title and empty user imput
//card hover
//card active will expand
//when data is filled correctly card will close and turn green
//when all three inputs green, user feedback interaction then on to calculating
//display results
