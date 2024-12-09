import { FlipWords } from "../ui/flip-words";

const words = [
  "web developer",
  "programmer",
];

export default function Head() {
  return (
    <div className="m-[2rem] flex flex-col">
      <p className="text-white text-[2rem]">
        Hi there! I'm a
      </p>
      {/* Vérifiez que `FlipWords` accepte bien `className` et `words` */}
      <FlipWords className="text-[3.5rem] ml-[3rem]" words={words} />
    </div>
  );
}
