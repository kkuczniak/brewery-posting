import beer from '../images/beer.png';
import './styles/Landing.css';

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
    </div>
  );
}
