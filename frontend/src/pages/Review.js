import { useQuery, gql } from '@apollo/client';

const REVIEWS = gql`
  query GetReview {
    reviews {
      id
      beer_name
      beer_style
      brewery
      body
      rating
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <>
      {data.reviews.map((review) => (
        <div key={review.id} className='review-card'>
          <div className='rating'>{review.rating}</div>
          <h2>{review.beer_name}</h2>
          <h3>{review.beer_style}</h3>
          <h3>{review.brewery}</h3>

          <p>{review.body.substring(0, 150)}...</p>
        </div>
      ))}
    </>
  );
}
