
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="h-24 bg-amber-900 text-white text-center pt-8">
      <p>
        &copy;{' '}
        <Link  onClick={(e) => { e.preventDefault(); window.open("https://github.com/kesermustafa", "_blank"); }}  className='text-xl text-amber-400'>
          Mustafa Keser
        </Link>{' '}
        All Rights Reserved.{' '}
      </p>
    </div>
  );
};

export default Footer;
