import React, { useEffect } from 'react'
import { useState } from 'react';

const counter = () => {
    const [count, setCount] = useState(0);
    const [pokemon, setPokemon] = useState([]);
    let num = 9
    const addNum = () => setCount(count + 1);
    useEffect(() => {
        console.log("honoka");
    }, [count]);

    const getPokemon = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const pokemons = await res.json();
        console.log(pokemons)
        setPokemon(pokemons.results)
    }

    const subNum = () => {
        setCount(count - 1);
    }
    const dubleNum = () => {
        setCount(count * 2);
    }
    return (
        <div>
            <p>{count}</p>
            <p>{num}</p>
            <>{pokemon.map((pokemoName) => {
                return(
                    <div key={pokemoName.name}> 
                        {pokemoName.name}
                    </div> 
                );
            })}</>
            {/* <button onClick={() => setCount(count + 1)}>追加</button> */}
            <button onClick={addNum}>+1</button>
            <button onClick={subNum}>-1</button>
            <button onClick={dubleNum}>×2</button>
            {/* <button onClick={() => { num = num + 1, console.log(num) }}>1</button>
            <button onClick={()=>setCount(num)}>nummmmm</button> */}
            <button onClick={getPokemon}>pokemon</button>
        </div>
    )
}

export default counter