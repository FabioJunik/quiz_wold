"use client"
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import image from "../../../../public/images/itachi.jpg"
import Image from "next/image";
import { Stars } from "@/components/stars";
import { Comment } from "@/components/comment";


export default function QuizPage() {
  
  return (
    <Container>
      <main className="grid grid-cols-[1fr_400px] w-full gap-8">
        <div>
          <div>
            <div>
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={image}
                alt="image"
              />
            </div>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit ab delectus aliquam sapiente rerum commodi ea! Atque, at doloribus! Possimus aperiam sequi temporibus, nemo nesciunt cum! Sequi, ipsa accusamus.</p>
            <Button className="w-full py-3">Fazer Quiz</Button>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
        </div>
        <div>
          <div className="w-full p-4 shadow-md rounded-md flex justify-between sticky top-2">
            <div className="flex flex-col">
              <div className="w-16 h-16 rounded-full border-2 border-primary-500">
                <Image 
                  className="w-full h-full object-cover rounded-full"
                  src={image}
                  alt="image"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Fábio Junik</h4>
                <p className="text-sm">@fabiojunik</p>
                <div className="mt-4 text-sm">
                  <span className="mr-2"><b>512</b> seguidores</span>
                  <span><b>16</b> questionários</span>
                </div>
              </div>
            </div>
            <div>
              <Button style="bottomless" className="py-2">Seguir</Button>
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}