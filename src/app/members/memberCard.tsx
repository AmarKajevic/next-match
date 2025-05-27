"use client";
import { Member } from "@/generated/prisma"
import { calculateAge } from "@/lib/util";
import { Card, CardFooter, Image } from "@heroui/react"
import Link from "next/link";

type Props ={
    member: Member
}

export default function memberCard({member}:Props) {
  return (
    <Card
         fullWidth
         as={Link}
         href={`/members/${member.userId}`}
         isPressable
         >
        <Image 
            isZoomed
            alt={member.name}
            width={300}
            src={member.image || '/image/user.png'}
            className="acspect-square object-cover"
        />
        <CardFooter className="flex justify-start bg-black overflow-hidden absolute bottom-0 z-10 bg-dark-gradient">
            <div className="flex flex-col text-white ">
                <span className="font-semibold">{member.name}, {calculateAge(member.dateOfBirth)}</span>
                <span className="text-sm">{member.city}</span>
            </div>
        </CardFooter>

    </Card>
  )
}