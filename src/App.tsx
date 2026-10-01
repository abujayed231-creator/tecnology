import Nav from "./comopnent/nav";
import Banner from "./comopnent/banner";
import Technology from "./comopnent/tec/tecnology";
import { Suspense, useState } from "react";
import type { ITechnology } from "./comopnent/tec/type";
import Futer from "./comopnent/tec/futer";

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologyPromise = technologyFetch();

function App() {
  console.log(technologyPromise);

  const [coin, setCoin] = useState(0);

  return (
    <>
      <Nav />

      <hr className="border-t border-gray-200 my-4 container mx-auto" />

      <Banner />
<hr className="border-t border-gray-200 my-4 container mx-auto" />
      <Suspense fallback={<p>Loading...</p>}>
        <Technology
          coin={coin}
          setCoin={setCoin}
          technologyPromise={technologyPromise}
        />
      </Suspense>
      <hr className="border-t border-gray-200 my-4 container mx-auto" />
      <Futer/>
    </>
  );
}

export default App;