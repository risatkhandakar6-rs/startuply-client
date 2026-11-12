import Myidea from "@/components/My-idea";
import { auth } from "@/lib/auth";
import { map } from "better-auth";
import { headers } from "next/headers";


export default async function MyIdeas() {
    const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:4000/my-idea/${user?.id}`);
  const data = await res.json();
  console.log(data)
  return (
    <div className="w-7/12 mt-10 mx-auto">
      <h1 className="font-bold text-4xl mb-10 ">My Ideas</h1>
      <div >{
    
      data.map(d => <Myidea key={d._id} idea={d}></Myidea>)
    }</div>
    </div>
  )
}
