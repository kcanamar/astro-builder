import { component$, useSignal, type JSXNode } from "@builder.io/qwik";

interface qwikProps {
    word: string;
}

export const Counter = component$((props: qwikProps): JSXNode => {
    const counter = useSignal(0);
    const word = props.word;
    return (
        <div>
            <p>{counter.value}</p>
            <button onClick$={() => counter.value++}>{word}</button>
        </div>
    )
});