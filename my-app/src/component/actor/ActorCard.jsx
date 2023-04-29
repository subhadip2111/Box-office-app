const ActorCard=({country,deathday,name,image,gender,birthday})=>{
    //const summarySplit=summary? summary.split("").slice(0,10).join("").replace(/<.+?>/g,''):"no Descriptions"
return (
<div>
  
<div>
<img src={image} alt={name}/>
</div>
 <h1>{name} {gender &&`(${gender})`}</h1>

 
 <p>{country?`Comes from ${country}`:"no country known"}</p>

{!!birthday&&<p>Born{birthday}</p>}
<p>{deathday?`Died${deathday}`:"Alive"}</p>
<div>
    <link to="/">Read More</link>
    <button type="button"> Start Me</button>
</div>

</div>
)
}
export default ActorCard