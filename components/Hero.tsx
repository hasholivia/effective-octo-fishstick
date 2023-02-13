const Hero = () => {
    return (
      <div class="w-screen bg-green-200 h-[70vh]">
        <div class="absolute w-full h-full bg-transparent bg-repeat-round" style={{backgroundImage: "url(" + "https://merch.deno.com/raindrops-animate.svg" + ")"}}></div>
        <div className="h-full w-full flex flex-col justify-center items-center font-bold">
          <img src="https://fresh.deno.dev/illustration/lemon-squash.svg?__frsh_c=jrpm1tkanse0" alt="deno-logo" className="w-60 h-60 z-20"/>
          <h1 className="z-20 text-5xl">Phil Yoo</h1>
          <p className="text-base font-semibold text-gray-700 z-20">Full Stack Developer</p>
        </div>
      </div>
    )
  }
  
  export default Hero;