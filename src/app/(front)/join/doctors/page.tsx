import { ButtonWithIcon } from '@/components/frontend/buttonWithIcon'
import CustomAccordian, { FAQ } from '@/components/frontend/CustomAccordian'
import Pricing from '@/components/frontend/pricing'
import { Button } from '@/components/ui/button'
import { Check, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {

  const cards=[
    {
      title:"Begin your journey",
      description:" Start a new application to join our network of healthcare providers.",
      link:"/",
      linkTitle:"Start a new application"
    },
    {
      title:"Resume Application",
      description:" Pick up where you left off and complete your onboarding process.Schedule for physical approval.",
      link:"/",
      linkTitle:"Continue your application"
    },
    {
      title:"Schedule a Call",
      description:" Arrange a time for call to finalize your application.",
      link:"/",
      linkTitle:"Schedule a Call"
    },
    {
      title:"Truck your progress",
      description:"Monitor the status of your application and approvals in real-time.",
      link:"/",
      linkTitle:"Check status"
    },
   
  ]
  const features=[
    "Medical App brings patients to you",
"Seamless e-prescribing experience",
"Integrated clinical note-taking",
"No fees for providers"
  ]
  const whyus=[
    {
      title:"List your practice",
      description:"It’s free to join with no membership fees or time commitments.",
    },
    
    {
      title:"Create competitive offerings",
      description:"We help you tailor your offerings to attract new patients and build your practice.",
    },
    
    {
      title:"Start seeing patients",
      description:"Patients can book appointments with you minutes after your profile goes live.",
    }
  
  ]
  const faqs: FAQ[] = [
    {
      qn: "How do I create an account?",
      ans: "To create an account, click on the 'Sign Up' button at the top right corner and fill in your details."
    },
    {
      qn: "What should I do if I forget my password?",
      ans: "If you forget your password, click on the 'Forgot Password' link on the login page and follow the instructions to reset it."
    },
    {
      qn: "How can I update my account information?",
      ans: "To update your account information, go to 'Account Settings' after logging in and edit your details."
    },
    {
      qn: "How do I delete my account?",
      ans: "To delete your account, please contact our support team at support@example.com, and they will assist you with the process."
    },
    {
      qn: "Can I change my username?",
      ans: "Usernames are unique and cannot be changed after account creation. However, you can create a new account with a different username."
    },
    {
      qn: "How do I link my social media accounts to my account?",
      ans: "You can link your social media accounts by going to 'Account Settings' and selecting the 'Link Social Media' option."
    }
  ];
  return (
    <div className='min-h-screen  '>
    <section className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-12 max-w-6xl mx-auto'>
        <div className="">

    <h2 className='lg:text-4xl text-3xl leading-10'> Build a thriving <span className='text-blue-600 font-semibold'>direct-pay</span>  practice with Medical App.
        </h2>
        <p className='py-4'>

Medical App is a full-service platform to help you build and run your practice and care for patients for virtual care, in-person care, or both.
        </p>
        <ButtonWithIcon title='List your practice' className='bg-blue-600 text-white' icon={Mail} link='#'/>
    
    <div className="py-4 leading-10">
         {features.map((item,i)=>{
          return(
            <p className='flex items-center' key={i} >
<Check className='h-4 w-4 mr-2 flex-shrink-0 text-blue-600'/>
{item}
        </p>
          )
        })}
       </div>
        </div>
        <Image className='w-full' src='/doc2.jpg' alt='doc' width={1172} height={781}/>
    </section>
    <section className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-12 max-w-6xl mx-auto'>
    <Image className='w-full hidden md:block' src='/doc2.jpg' alt='doc' width={1172} height={781}/>
        <div className="">

    <h2 className='sm:text-4xl text-2xl leading-10'>Join Medical App to increase your  <span className='text-blue-600 font-semibold mx-2'>revenue </span>  today.
        </h2>
        {/* <p className='py-4'>

Medical App is a full-service platform to help you build and run your practice and care for patients for virtual care, in-person care, or both.
        </p> */}
        <div className="py-4 ">
         {whyus.map((item,i)=>{
           return(<div className='flex  flex-col  mb-4' key={i} >
            <div className='flex items-center'>

<Check className='h-4 w-4 mr-2 flex-shrink-0 text-blue-600'/>
<h2 className='font-semibold'>
  {item.title}
  </h2>
            </div>
  <p className='ml-6 text-sm font-normal'>
    {item.description}
  </p>
        </div>)
       })}
       </div>
        <div className='grid grid-cols-2 gap-4'>
      {cards.map((card,i)=>{
        return(
          <div key={i} className="bg-blue-900 p-4 text-center rounded-lg shadow-2xl w-auto flex flex-col ">
        <h3 className="text-2xl font-semibold text-white">
        {card.title}
        </h3>
        <p className='text-gray-400  py-4 text-xs flex-grow'>
      {card.description}
        </p>
        <ButtonWithIcon title={card.linkTitle} className='bg-blue-600 text-white w-full mt-auto' icon={Mail} link={card.link}/>
      </div>
        )
      })}
    </div>
   
        </div>
   
    </section>
    <section className=' py-12 max-w-6xl mx-auto'>
    <Pricing/>
    </section>
    <section className=' py-12 max-w-2xl mx-auto'>
    <CustomAccordian faqs={faqs}/>
    </section>
    </div>
  )
}

export default page