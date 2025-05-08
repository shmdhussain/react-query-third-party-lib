import { useFetchIds } from "@mymonorepo/my-lib-1";
import { Nav } from "./Nav";
export function Comp1() {
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
