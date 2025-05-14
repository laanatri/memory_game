/**
 * @param {string} picto
 */

import { useState } from 'react';

import styles from "./card.module.css";

export default function Card({picto}) {
    
    const [fliped, setFliped] = useState(false);
    
    const handleFliped = () => {
        setFliped(!fliped);
        
    };

    return <div className={fliped ? `${styles.card} ${styles.fliped}` : styles.card} onClick={handleFliped}>
        <div>
            <p>X</p>
        </div>
        <div>
            <p>{picto}</p>
        </div>
    </div>
}