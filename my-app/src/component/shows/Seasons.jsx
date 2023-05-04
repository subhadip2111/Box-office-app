const Seassions=({seasons})=>{
    
    return <div>
       <p>
        Seasions in total :{seasons.length}
       </p>
       <p>
        Episode in total :{seasons.reduce((sum,seasons)=>sum+seasons.episodeOrder,0)}
       </p>
       <div>
        {seasons.map(seasons=>(
            <div key={seasons.id}><p>Seasions {seasons.number}</p>
            
            <p>
              Episodes : {seasons.episodeOrder} 
            </p>
            <div>
                Aired :{seasons.premierDate}-{seasons.endDate}
            </div>
            </div>
        ))}
       </div>
    </div>
}
export default Seassions