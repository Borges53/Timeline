import Head from "next/head";
import Timeline from "../components/Timeline";
export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Timeline />
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: block;
          width: 100%;
          max-width: 1200px;
          margin: 5px auto;
          padding: 26px 20px;
          flex-direction: column;
          align-items: flex-start;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: black;
          color: white;
        }
        ul {
          list-style: none;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
