import { Link } from 'react-router-dom';
import { BsBoxArrowInRight } from "react-icons/bs";
import './styles/card.scss';
import DetailButton from "./ButtonDetail.jsx";
import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ book }) => {
  return (
    <div className="card shadow">
      <img
        className="rounded img-fluid"

        src={book.volumeInfo?.imageLinks?.smallThumbnail}
      />

      <div className="card-body ">
        <div className="flex flex-nowrap gap-2">
          <span>Name</span> <h4>{book.volumeInfo.title}</h4>
        </div>
        <div className="flex flex-nowrap gap-2 mt-3">
          <span>Author</span>
          <h5>{book.volumeInfo.authors}</h5>
        </div>
      </div>

        <DetailButton to={`/detail/${book.id}`} title="Details" />
    </div>
  );
};

export default Card;
