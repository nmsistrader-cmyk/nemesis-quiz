import dynamic from "next/dynamic";
import Head from "next/head";

const NemesisTraderQuiz = dynamic(() => import("../components/NemesisTraderQuiz"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>NEMESIS TRADER — เกมทดสอบความเข้าใจ</title>
        <meta name="description" content="เกมทดสอบความเข้าใจเทคนิคการเทรดและจิตวิทยา โดย Nemesis Trader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NemesisTraderQuiz />
    </>
  );
}
