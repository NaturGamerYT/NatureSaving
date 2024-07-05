import { SayHelloProps } from "./types";

export function sayHello({ firstName }: SayHelloProps) {
    if (firstName) {
        console.log(`Hello ${firstName}!`);
    } else {
        console.log('Hello!')
    }
}