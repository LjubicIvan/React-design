import React from 'react'
import {FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa'



function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum officia nesciunt distinctio, beatae animi modi quidem blanditiis neque maiores, qui aliquam consequuntur assumenda optio deleniti eaque, laboriosam architecto. Incidunt!</p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaGithubSquare size={30}/>
                <FaTwitterSquare size={30}/>
                
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-100 text-bold'>Technologies</h6>
                <ul>
                    <li className='py-2 text-sm'>React</li>
                    <li className='py-2 text-sm'>TailwindCss</li>
                    <li className='py-2 text-sm'>React-icons</li>
                    <li className='py-2 text-sm'>React-typed</li>
                 </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-100 text-bold'>Pricing</h6>
                <ul>
                    <li className='py-2 text-sm'>One User</li>
                    <li className='py-2 text-sm'>Two User</li>
                    <li className='py-2 text-sm'>Three User</li>
                    
                 </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-100 text-bold'>Newsletter</h6>
                <ul>
                    <li className='py-2 text-sm'>Sign Up</li>
                    <li className='py-2 text-sm'>Privacy Policy</li>
                    <li className='py-2 text-sm'>Notify Me</li>
                    
                 </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-100 text-bold'>Social</h6>
                <ul>
                    <li className='py-2 text-sm'>Facebook</li>
                    <li className='py-2 text-sm'>Instagram</li>
                    <li className='py-2 text-sm'>Github</li>
                    <li className='py-2 text-sm'>Twitter</li>
                 </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Footer