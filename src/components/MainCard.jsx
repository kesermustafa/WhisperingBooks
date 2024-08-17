
import './styles/maincard.scss';

import DetailButton from "./ButtonDetail.jsx";
// eslint-disable-next-line react/prop-types
const MainCard = ({ books }) => {
  function getRandomTwoBooks(books) {
    // eslint-disable-next-line react/prop-types
    const shuffled = books.sort(() => 0.5 - Math.random()); // Array'i karıştır
    return shuffled.slice(0, 2); // İlk iki elemanı al
  }

  const randomBooks = getRandomTwoBooks(books);

  return (
      <div className="main-container">
        {randomBooks?.map((book, index) => (
            <div key={book.id} className="main-info ">
              <div className="main-img">
                <img
                    src={book.volumeInfo?.imageLinks?.smallThumbnail}

                    alt=""
                />
              </div>

              <div className="flex flex-col justify-around h-full infos ">
                <div className="flex flex-nowrap ">
                  <h3 className="title">{book.volumeInfo.title}</h3>
                </div>
                <div className="flex flex-nowrap  ">
                  <h5>Author</h5>{' '}
                  <span className="author">: {book.volumeInfo.authors}</span>
                </div>
                <div className="flex flex-nowrap  ">
                  <h5>Language </h5>
                  <span className=" uppercase ">: {book.volumeInfo.language}</span>
                </div>
                <div className="flex flex-nowrap">
                  <h5>Page</h5> <span>: {book.volumeInfo.pageCount}</span>{' '}
                </div>
                <div className="flex flex-nowrap">
                  <h5>Date</h5> <span>: {book.volumeInfo.publishedDate}</span>{' '}
                </div>
                <div>
                  <p className="desc">{book.volumeInfo?.description}</p>
                </div>

                <DetailButton to={`/detail/${book.id}`} title="Details"/>

                <div className='header-info'   style={{
                  backgroundColor: index === 0 ? '#f4862d' : '#9223d2',
                }}>

                  {index === 0 ? <p>EDITORUN SECIMI</p> : <p>AYIN KITABI</p>}

                </div>
              </div>

            </div>
        ))}

      </div>
  );
};

export default MainCard;
