import { FlipWords } from "../ui/flip-words";

const words = [
    "web developer",
    "programmer"
]

export default function Head(){
    return (
        <div className="m-[2rem] flex-col">
            <p className="text-white text-[2rem]">
                Hi there! I'm a 
            </p>
            <FlipWords className="text-[3.5rem] ml-[3rem]" words={words} />
        </div>
    )
}