import { Effect, Ref } from "@/hooks";

export default function Home() {
  return (
    <div>
      <Ref />
      <Effect dependiency={false} />
    </div>
  );
}
