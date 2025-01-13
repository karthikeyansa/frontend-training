import Link from "next/link";

type quizeType = {
  id: number;
  name: string;
};

const quizes: quizeType[] = [
  {
    id: 1,
    name: "quiz1",
  },
  {
    id: 2,
    name: "quiz2",
  },
  {
    id: 3,
    name: "quiz3",
  },
];

export default function Home() {
  return (
    <section>
      <h1>hello world</h1>
      <ul>
        {quizes.map((quiz: quizeType) => {
          return (
            <li>
              <Link href={`/quiz/${quiz.id}`}>{quiz.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
