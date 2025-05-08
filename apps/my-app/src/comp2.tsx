import { useFetchIds } from "@mymonorepo/my-lib-2";
import { Nav } from "./Nav";
export function Comp2() {
  const { data: data } = useFetchIds(5);
  console.log("data", data);
  return (
    <>
      <Nav />
      <p>
        Hello world from comp 2 ids are {data?.map((i) => `${i.toString()},`)}
      </p>
    </>
  );
}
