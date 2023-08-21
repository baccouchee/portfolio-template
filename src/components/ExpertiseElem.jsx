import React from 'react'

const ExpertiseElem = ({ text, desc, svgPath }) => {
  return (
    <>
      <div className="flex">
        <div className="w-[20%] flex items-center justify-center">
          <img src={svgPath} width="80%" height="80%" alt="SVG Image"></img>
        </div>
        <div className="w-[80%] text-left text-white flex-cols justify-center items-center text-2xl font-bold font-body p-1">
          <p>{text}</p>
        </div>
      </div>
      <div className="flex flex-col text-slate-500 text-sm font-body">
        <div className="flex">
          <div className="w-[20%]">{'<h3>'}</div>
        </div>
        <div className="flex">
          <div className="w-[20%] flex justify-center items-center">
            <div className="w-0.5 h-full bg-slate-500"></div>
          </div>
          <div className="w-[80%] text-left text-white">
            <p>{desc}</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[20%]">{'</h3>'}</div>
        </div>
      </div>
    </>
  )
}

export default ExpertiseElem
