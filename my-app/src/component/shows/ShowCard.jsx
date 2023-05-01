import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary }) => {
  const summarySplit = summary
    ? summary.split('').slice(0, 10).join('').replace(/<.+?>/g, '')
    : 'no Descriptions';
  return (
    <div>
      <h1>{name}</h1>
      <p>{summarySplit}</p>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <Link to="/" Read More />
        <button type="button"> Start Me</button>
      </div>
    </div>
  );
};
export default ShowCard;
