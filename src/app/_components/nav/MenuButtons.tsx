import React from 'react'

const MenuButtons = () => {
  return (
    <div className="mt-5 flex flex-col justify-center gap-2 mx-4 ">
      <p className="text-center cursor-pointer text-almost-black">Login</p>
      <button className="w-full border border-1 text-almost-black border-almost-black rounded-xl  py-2">
        Register
      </button>
    </div>
  );
}

export default MenuButtons