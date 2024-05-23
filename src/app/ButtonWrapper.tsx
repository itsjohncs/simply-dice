"use client";

import {PlusMinusButton} from "@shmeppy/dumb-dice-components";

export default function ButtonWrapper() {
    return (
        <PlusMinusButton onPlus={() => null} onMinus={() => null} count={0}>
            d20
        </PlusMinusButton>
    );
}
