import { createCardValues, cardSuit, cardValue } from './create-cards-value';

export function counterTimes(container) {
    const valueMinute = container.querySelector('.block-timer__value-minute');
    const valueSecond = container.querySelector('.block-timer__value-sec');

    let minute = 0,
        second = -5;

    const result = () => {
        second++;

        if (second < 0) return;

        if (second < 10) {
            valueSecond.textContent = `0${second}`;

            return;
        }

        valueSecond.textContent = `${second}`;

        if (second > 59) {
            second = 0;
            valueSecond.textContent = `0${second}`;
            minute++;
        }

        if (minute < 10) {
            valueMinute.textContent = `0${minute}`;

            return;
        }

        valueMinute.textContent = `${minute}`;
    };

    return result;
}

export function getRandomArrayCards() {
    const cardsValue = createCardValues(cardSuit, cardValue);

    let randomArray = [];

    for (let i = 0; i < window.application.numberOfCards; i++) {
        let randomNumber =
            Math.floor(Math.random() * (cardsValue.length - 0)) + 0;

        if (randomArray.length > 0) {
            const checkCardInArray = randomArray.find(
                (item) => item.cardName === cardsValue[randomNumber]['cardName']
            );

            if (checkCardInArray) {
                i--;

                continue;
            }
        }

        randomArray.push(cardsValue[randomNumber]);
        randomArray.push(cardsValue[randomNumber]);
    }

    randomArray.sort(() => Math.random() - 0.5);

    return randomArray;
}

export function checkCards() {
    let firstCard,
        secondCard,
        numberOfWin = 0,
        numberOfattempt = 3;

    const result = (event) => {
        const target = event.target;

        if (!target.closest('.block-game__card-wrapper_background')) return;

        if (firstCard && secondCard) return;

        if (!firstCard) {
            firstCard = target.closest('.block-game__card-wrapper');
            firstCard.classList.remove('block-game__card-wrapper_background');

            return;
        }

        secondCard = target.closest('.block-game__card-wrapper');
        secondCard.classList.remove('block-game__card-wrapper_background');

        if (firstCard.dataset.valueCard === secondCard.dataset.valueCard) {
            firstCard = '';
            secondCard = '';

            numberOfWin++;

            if (numberOfWin === window.application.numberOfCards) {
                setTimeout(() => {
                    alert(`Вы выиграли! Затраченное время: ${getTime()}`);
                }, 500);
            }

            return;
        }

        setTimeout(() => {
            firstCard.classList.add('block-game__card-wrapper_background');
            secondCard.classList.add('block-game__card-wrapper_background');

            firstCard = '';
            secondCard = '';

            numberOfattempt--;

            if (numberOfattempt === 0) {
                setTimeout(() => {
                    alert(`Вы проиграли! Затраченное время: ${getTime()}`);
                }, 0);
            }
        }, 500);
    };

    return result;
}

export function getTime() {
    const timeMinute = document.querySelector(
        '.block-timer__value-minute'
    ).textContent;
    const timeSec = document.querySelector(
        '.block-timer__value-sec'
    ).textContent;

    return `${timeMinute}.${timeSec}`;
}
