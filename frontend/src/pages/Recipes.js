import { useQuery, gql } from '@apollo/client';
import './styles/Recipes.css';
import ReactMarkdown from 'react-markdown';

const RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      ibu
      directions
      abv
      malt
      BLG
      hops
      yeast
      name
      style
    }
  }
`;

export default function Recipes() {
  const { loading, error, data } = useQuery(RECIPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.recipes.map((recipe) => (
        <div key={recipe.id} className='recipe-card'>
          <h3>{recipe.name}</h3>
          <h6>{recipe.style}</h6>
          <div className='parameters'>
            <h4>Parameters: </h4>
            <p>IBU: {recipe.ibu}</p>
            <p>ABV: {recipe.abv}%</p>
            <p>BLG: {recipe.BLG}</p>
          </div>
          <div className='ingredients'>
            <h4>Ingredients: </h4>
            <p>Malts: </p>
            <ReactMarkdown children={recipe.malt} />

            <p>Hops: </p>
            <ReactMarkdown children={recipe.hops} />

            <p>Yeast: </p>
            <ol>{recipe.yeast}</ol>
          </div>
          <div className='directions'>
            <h4>Directions:</h4>
            <p>{recipe.directions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
