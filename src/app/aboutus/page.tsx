'use client'
import Typist from "react-typist-component"

export default function aboutus() {
    return(
    <main className="flex flex-col items-center justify-between">
      <div className="font-bold text-[60px] ">
        <Typist typingDelay={100} cursor={<span className='cursor onTypingDone'>|</span>}>
          This is a typo
        </Typist>
      </div>
      <p className="pb-[500px]">LMAO</p>
      <p className="pb-[500px]">LMAO</p>
      <p className="pb-[500px]">LMAO</p>
      <p className="pb-[500px]">LMAO</p>
    </main>
    )
}