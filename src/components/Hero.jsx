

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className=" flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl  font-thin tracking-tight  lg:mt-16 lg:text-8xl">Kingsley Aigbojie</h1>
                <span className="bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Developer</span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    I am a passionate front-end developer with a keen eye for design and a strong foundation in JavaScript. I have a strong understanding of HTML, CSS, and modern JavaScript frameworks like React and Next.js. I am currently looking for opportunities to collaborate on innovative and challenging projects.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
             <div className="flex justify-center">
                <img  className="w-[300px] mt-10 rounded-2xl"src="https://images.unsplash.com/photo-1607294846590-fd005d7973e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"/>
             </div>

            </div>
        </div>
    </div>
  )
}
