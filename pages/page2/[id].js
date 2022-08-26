import { Router, useRouter } from "next/router";

export default function Page2Post() {
    const Router = useRouter()
  return (
    <div>
      <h1>id is {Router.query.id}</h1>
    </div>
  );
}
