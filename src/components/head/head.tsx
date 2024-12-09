import { FlipWords } from "../ui/flip-words";

const words = ["web developer", "programmer"];

export default function Head() {
  return (
    <div className="m-[2rem] flex flex-col">
      <p className="text-[2rem] text-white">Hi there! I am a</p>
      {/* Vérifiez que `FlipWords` accepte bien `className` et `words` */}
      <FlipWords className="ml-[3rem] text-[3.5rem]" words={words} />
    </div>
  );
}
