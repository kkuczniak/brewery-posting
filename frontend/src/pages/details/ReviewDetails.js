import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id
      beer_name
      beer_style
      brewery
      body
      rating
    }
  }
`;

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error derails</p>;

  console.log(data);

  return (
    <>
      <div key={data.review.id} className='review-card'>
        <div className='rating'>{data.review.rating}/10</div>
        <h2>{data.review.beer_name}</h2>
        <h3>{data.review.beer_style}</h3>
        <h3>{data.review.brewery}</h3>

        <p>{data.review.body}</p>
      </div>
    </>
  );
}
