import './styles/card.scss';
import DetailButton from "./ButtonDetail.jsx";


// eslint-disable-next-line react/prop-types
const Card = ({ book }) => {
  return (
    <div className="card shadow">
      <img
        className="rounded img-fluid"

          // eslint-disable-next-line react/prop-types
        src={book.volumeInfo?.imageLinks?.smallThumbnail}
      />

      <div className="card-body ">
        <div className="flex flex-nowrap gap-2">
            {/* eslint-disable-next-line react/prop-types */}
          <span>Name</span> <h4>{book.volumeInfo.title}</h4>
        </div>
        <div className="flex flex-nowrap gap-2 mt-3">
          <span>Author</span>
            {/* eslint-disable-next-line react/prop-types */}
          <h5>{book.volumeInfo.authors}</h5>
        </div>
      </div>

        {/* eslint-disable-next-line react/prop-types */}
        <DetailButton to={`/detail/${book.id}`} title="Details" />
    </div>
  );
};

export default Card;
