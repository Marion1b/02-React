function Calcul(){
    const numbers = [ 4, 3, 7 ];
    return(
        <ul>
            {numbers.map(number => (<li key={number}>{number**3}</li>))}
        </ul> 
    )
    
}

export default Calcul