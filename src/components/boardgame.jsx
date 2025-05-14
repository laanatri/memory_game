import Card from "./card.jsx";

import styles from "./boardgame.module.css";

const pictos = ["🦜", "🐊", "🪼", "🐞"];

const createDeck = (number, listPictos) => {
    let deck = [];
    for (let i = 0; i < number/2; i++) {
        for (let e = 0; e < 2; e++) {
            const random = Math.random();
            if (random > .5) {
                deck.push(listPictos[i])
            } else {
                deck.unshift(listPictos[i])
            }
        }
    }
    return deck;
};

export default function BoardGame() {
    return <section className={styles.boardgame}>
                {createDeck(8, pictos).map((picto, i) => {
                    return <Card key={i} picto={picto}/>
                })}
            </section>;
};