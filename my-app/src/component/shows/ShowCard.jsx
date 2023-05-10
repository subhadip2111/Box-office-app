

const ShowCard = ({ name, image, id, summary ,onStartClick,isStart}) => {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer"> Read  More</a>

        <button type="button" onClick={()=>onStartClick(id)}> 
        {isStart?'unStared Me':'Star Me'}
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
