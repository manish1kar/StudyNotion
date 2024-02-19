import React from 'react'
import Button from './Button'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
  position, heading, subHeading, btn1, btn2, codeblock, bgGradient, codeColor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>

      <div className='w-6/12 flex flex-col gap-8'>
        {heading}
        <div className='text-richblack-300 font-bold'>
          {subHeading}
        </div>

        <div className='flex gap-7 mt-7'>
          <Button active={btn1.active} linkto={btn1.linkto}>
            <div className='flex gap-2 items-center'>
              {btn1.btnText}
              <FaArrowRight/>
            </div>
          </Button>
          <Button active={btn2.active} linkto={btn2.linkto}>
              {btn2.btnText}
          </Button>
        </div>
      </div>

      <div className='h-fit flex flex-row text-[10px] w-6/12 py-4 lg:w-[500px]'>
      <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold '>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
      </div>
      <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
        <TypeAnimation
          sequence={[codeblock, 10000, ""]}
          repeat={Infinity}
          cursor={true}
          style={
            {
              whiteSpace: "pre-line",
              display : "block"
            }
          }
          omitDeletionAnimation={true}
        />
      </div>
      </div>
    </div>
  )
}

export default CodeBlocks
