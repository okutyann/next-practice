import Image from 'next/image'
import React from 'react'

export const PokemonComp = ({ pokemon }) => {
    console.log("ポケモン",pokemon)
    return (
        <div>
            <div>
                {pokemon?.name}
                {pokemon?.url}
            </div>
        </div>
    )
}
