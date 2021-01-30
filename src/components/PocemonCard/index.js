import { useState } from 'react';

import p from './style.module.css';

import cardBackside from './assets/card-back-side.jpg';

const PokemonCard = ({id, name, type, img, values}) => {
    const [isActive, setActive] = useState(false);

    console.log('####: isActive', isActive);
    const handleClick = () => {
        setActive(!isActive)
    }

    return (
        <>
            <div className={p.root} onClick={handleClick}>
                <div className={`${p.pokemonCard} ${isActive ? p.active : ''} `}>
                    <div className={p.cardFront}>
                        <div className={`${p.wrap} ${p.front}`}>
                            <div className={`${p.pokemon} ${p[type]}`}>
                                <div className={p.values}>
                                    <div className={`${p.count} ${p.top}`}>{values.top}</div>
                                    <div className={`${p.count} ${p.right}`}>{values.right}</div>
                                    <div className={`${p.count} ${p.bottom}`}>{values.bottom}</div>
                                    <div className={`${p.count} ${p.left}`}>{values.left}</div>
                                </div>
                                <div className={p.imgContainer}>
                                    <img src={img} alt={name} />
                                </div>
                                <div className={p.info}>
                                    <span className={p.number}>#{id}</span>
                                    <h3 className={p.name}>{name}</h3>
                                    <small className={p.type}>Type: <span>{type}</span></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={p.cardBack}>
                        <div className={`${p.wrap} ${p.back}`}>
                            <img src={cardBackside} alt="Сard Backed" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;