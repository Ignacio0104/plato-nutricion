import { Suspense } from "react";
import MainLayout from "./components/MainLayout/MainLayout";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center pt-6">
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    </main>
  );
}
