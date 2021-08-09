import beer from '../images/beer.png';
import big from '../images/big-eclipse.svg';
import mid from '../images/mid-eclipse.svg';
import small from '../images/small-eclipse.svg';
import './Landing.css';

export default function Landing() {
  return (
    <div>
      <section className='presentation'>
        <div className='introdution'>
          <div className='intro-text'>
            <h1>Let's start your beer jurney</h1>
            <p>
              Explore BEER OR NOT TO BEER to learn how to taste and make your
              own beer
            </p>
          </div>
        </div>
        <div className='cover'>
          <img src={beer} alt='craft' />
        </div>
      </section>
      <img className='big-circle' src={big} alt='' />
      <img className='mid-circle' src={mid} alt='' />
      <img className='small-circle' src={small} alt='' />
    </div>
  );
}
