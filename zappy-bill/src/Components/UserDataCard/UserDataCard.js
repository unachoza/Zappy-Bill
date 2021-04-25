import './UserDataCard.scss';
import { FORM_DATA } from '../../Constants';

const UserDataCard = ({ card, handleInput }) => {
  const { title, icon, name } = card;
  return (
    <div className="card">
      <img src={icon} id="card-icon" alt="icon" />
      <div className="card-title-container">
        <div className="card-title"></div>
        <input className="card-text" type="text" placeholder={title} name={name} onBlur={(e) => handleInput(e)} />
      </div>
    </div>
  );
};

export default UserDataCard;

//card with icon and title and empty user imput
//card hover
//card active will expand
//when data is filled correctly card will close and turn green
//when all three inputs green, user feedback interaction then on to calculating
//display results
