import UserDataCard from '../../Components/UserDataCard/UserDataCard';
import { FORM_DATA } from '../../Constants';
import './HomePage.scss';

const HomePage = () => {
  console.log('on homepage', FORM_DATA);
  return (
    <>
      <h1 className="header">Hello, Jenny User!</h1>
      <div className="user-data">
        <div className="data-card"> Please provide some information to calculate your Energy Bill</div>
        {FORM_DATA.map((card, i) => {
          console.log('inside map', card);
          return (
            <button className="card">
              <UserDataCard key={i} card={card} />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
