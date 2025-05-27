import { getMemberPhotosByUserId } from "@/app/actions/memberActions";
import Image from "next/image";

export default async function PhotosPage({params} :{params: Promise<{userId: string}>}) {
    const {userId} = await params;
    const photos = await getMemberPhotosByUserId(userId);
   return (
    <>
    <div className="p-5">
      <div className="text-2xl font-semibold text-secondary ">
          Photos
      </div>
      <div className="my-4 border-t border-gray-300" />
      <div>
        <div className="grid grid-cols-5 gap-3">
            { photos && photos.map(photo => (
                <div key={photo.id}>
                    <Image
                        width={300}
                        height={300}
                        src={photo.url}
                        alt='image of member'
                        className='object-cover aspekt-square rounded-xl'
                    />
                </div>
            ))}
        </div>
      </div>
      </div>
    </>
    
  )
}