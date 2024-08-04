import Image from "next/image"
import image from "../../../public/images/itachi.jpg"
import { Stars } from "../stars"

export const Comment = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-2">
        <div className="w-9 h-9 ">
          <Image
            className="w-full h-full object-cover rounded-full"
            src={image}
            alt="image"
          />
        </div>
        <div>
          <div className="flex text-sm items-center">
            <p>António Muteka</p>
            <span className="w-1 h-1 bg-gray-400 rounded-full mx-2"></span>
            <p className="text-xs -ml-1"> 19 de julho 2024</p>
          </div>
          <Stars/>
        </div>
      </div>
      <p className="text-sm">Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45.</p>
    </div>
  )
}