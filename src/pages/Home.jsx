import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import './styles/home.scss';
import Container from '../components/Container';
import MainCard from '../components/MainCard';
import {useSearchParams} from "react-router-dom";
import Undefined from "./Undefined.jsx";


const Home = () => {
  const [books, setBooks] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = !searchParams.get('query')  ? 'web' : searchParams;

    const url = `${apiURL}?q=${searchQuery}&printType=books&maxResults=20&key=${apiKey}`;
    axios
      .get(url)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }, [searchParams]);

  return (
    <Container>
      {books && <MainCard books={books} /> }
      <div className="home my-5">
        <div className="cards-container">
          {books?.map(
            (book) =>
              book.volumeInfo?.imageLinks?.smallThumbnail &&
              book.volumeInfo.authors && <Card key={book.id} book={book} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
