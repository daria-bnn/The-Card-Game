import { createTempleteCart } from '../template-engine/create-template-card';
import { blockForm } from '../blocks-html/form';
import { makeButtonInactive, makeButtonActive } from '../utils/utils';

enum Levels {
    Light = 'light',
    Medium = 'medium',
    Hard = 'hard',
}
export function createForm(container: HTMLDivElement): void {
    container?.appendChild(createTempleteCart(blockForm()));

    const form = container.querySelector('.form');
    const inputs: NodeListOf<HTMLInputElement> = container.querySelectorAll(
        '.block-options__input'
    );

    const error = container.querySelector('.form__error');

    form?.addEventListener('submit', (event): void => {
        event.preventDefault();

        const button: HTMLButtonElement | null =
            container.querySelector('.form__button');

        let checkValidate: boolean = false;

        makeButtonInactive(button);

        inputs.forEach((input) => {
            if (input.checked) {
                checkValidate = true;

                if (
                    input.value === Levels.Light ||
                    input.value === Levels.Medium ||
                    input.value === Levels.Hard
                ) {
                    window.numberOfCards =
                        window.levelsGame[input.value].cardsPairs;
                    window.attempt = window.levelsGame[input.value].attempt;
                }

                window.application.renderScreen('render-game-page');
            }
        });

        if (!checkValidate) {
            makeButtonActive(button);

            error?.classList.remove('form__error_hidden');
        }
    });

    form?.addEventListener('click', (event) => {
        const target = <HTMLElement>event.target;

        if (target.closest('.block-options__name')) {
            error?.classList.add('form__error_hidden');
            console.log('click');
            return;
        }
    });
}
