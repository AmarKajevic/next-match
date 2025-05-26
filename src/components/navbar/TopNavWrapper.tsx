import { auth } from "@/auth"
import TopNav from "./TopNav";

export default async function TopNavWrapper() {
    const session = await auth();
  return (
    <TopNav session={session} />
  )
}