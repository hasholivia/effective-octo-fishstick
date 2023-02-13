const Header = () => {
    return (
      <div class="absolute top-[15] w-full h-[10vh] flex z-10">
        <div class="flex flex-row gap-5 text-lg justify-center text-gray-700 w-full items-center">
          <div className="cursor-pointer">Projects</div>
          <div className="cursor-pointer">Contact</div>
          <div className="cursor-pointer">Resume</div>
        </div>
      </div>
    )
  }
  
  export default Header;