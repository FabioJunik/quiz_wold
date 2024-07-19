import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-500 ">
     <Link href="/quiz/1">Quiz</Link>
    </main>
  );
}
