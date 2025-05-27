
import { getMemberByUserId } from "@/app/actions/memberActions"
import { notFound } from "next/navigation";

export default async function MemberDetailedPage({params}
    : {params: Promise<{userId: string}> }) {
const {userId} = await params;

    const member = await getMemberByUserId(userId);
    if(!member) return notFound();

  return (
    <>
    <div className="p-5">
      <div className="text-2xl font-semibold text-secondary ">
          Profile
      </div>
      <div className="my-4 border-t border-gray-300" />
      <div>
        {member.description}
      </div>
      </div>
    </>
  )
}