
 export default function  AppTitle(props){
    const {title="Box-office",subtitle="Are you looking for movie app"}=props
    return (  
    <div>
    <h1>
        {title}
    </h1>
    <p>
        {subtitle}
    </p>
    
        </div>)
    
      
    }