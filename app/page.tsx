import { Suspense } from "react";
import MainLayout from "./components/MainLayout/MainLayout";

export default function Home() {
  return (
    <main className="w-full h-[100vh] sm:h-full bg-pink flex flex-col items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    </main>
  );
}
