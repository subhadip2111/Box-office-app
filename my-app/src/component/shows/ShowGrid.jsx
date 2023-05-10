import ShowCard from './ShowCard';

import { useStartShows } from '../../lib/useStartedShows'; 

const ShowGrid = ({ shows }) => {
  const [startShow, dispathStarted]= useStartShows()
  
  const onStartClick = showId => {
    const isStarted = startShow.includes(showId);

    if (isStarted) {
      dispathStarted({ type: 'UNSTAR', showId });
    } else {
      dispathStarted({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : './not found.png'}
          id={data.show.id}
          summary={data.show.summary}
          onStartClick={onStartClick}
          isStart={startShow.includes(data.show.id)}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
