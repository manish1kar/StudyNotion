import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import Button from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'

const Home = () => {
  return (
    <div>
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
        <Link to={"/signup"}>
          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
          transition-all duration-200 hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] 
            transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight/>
            </div>
          </div>
        </Link>
        <div className='text-center text-4xl font-semibold mt-7'>
          Empower Your Future With  
          <HighlightText text={"Coding Skills"}/>
        </div>
        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>
        <div className='flex flex-row gap-7 mt-8'>
          <Button active={true} linkto={"/signup"}>
            Learn More
          </Button>
          <Button active={false} linkto={"/login"}>
            Book a Demo
          </Button>
        </div>
        <div className='shadow-blue-200 mx-3 my-12'>
          <video
          muted
          loop
          autoPlay
          >
          <source src={Banner} type='video/mp4'/>
          </video>
        </div>
        <div>
          <CodeBlocks
            position={"flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock Your 
                <HighlightText text={"coding potential"}/>
                with our online courses
              </div>
            }
            subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                btn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                btn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>

        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                btn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                btn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>
      
        <ExploreMore/>
      </div>

      <div className='bg-pure-greys-5 text-richblack-700'>
              <div className="home-bg h-[333px]">
                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between 
                gap-5 mx-auto'>
                  <div className='h-[150px]'></div>
                  <div className='flex flex-row gap-7 text-white'>
                      <Button active={true} linkto={"/signup"}>
                          <div className='flex items-center gap-3'>
                            Explore Full Catalog
                            <FaArrowRight/>
                          </div>
                      </Button>
                      <Button active={false} linkto={"/signup"}>
                          <div>
                            Learn More
                          </div>
                      </Button>
                  </div>
                </div>
              </div>

              <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between 
                gap-5 mx-auto'>
                  <div className='flex flex-row gap-5 mb-10 mt-[95px] justify-center'>
                      <div>
                        Get the Skills you need for a 
                        <HighlightText text={"Job that is in demand"}/>
                      </div>

                      <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <div className='text-[16px]'>
                            The Modern StudyNotion is the dictates its own terms. Today, to be a competitive
                            specialist requires more than professional skills.
                        </div>
                        <Button active={true} linkto={"/signup"}>
                          <div>
                            Learn More
                          </div>
                        </Button>
                      </div>
                  </div>

                  <TimelineSection/>
                  <LearningLanguageSection/>
              </div>
      </div>

      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8
              first-letter bg-richblack-900 text-white'>
                  <InstructorSection/>

                  <h2 className='text-center text-4xl font-semibold mt-10'
                  >review from other Learners</h2>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
