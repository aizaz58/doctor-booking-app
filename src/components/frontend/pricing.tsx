import { Check, HelpCircle } from 'lucide-react';
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';






export default function Pricing()  {

    const plans = [
        {
            name: "Free Forever",
            desc:"Ideal for individual practioners starting out.",
            price: 0,
            fee:5,
            isPopular:false,
            features: [
               "Manage up to 50 patients.",
               "Basic patient record management",
               "Email notifications for oppointments."

            ],
        },
        {
            name: "Professiona;",
            desc:"Perfect for small to medium sized clinics.",
            isPopular:true,
            price: 59.9,
            fee:2,
            features: [
               "Unlimitd appointments.",
               "Advanced patient record management.",
               "Sms reminders for appointments",
               "customizable clinic profile."
            ],
        },
        {
            name: "Enterprise",
            desc:"Tailored for large hospitals and  institutions.",
            price: 99,
            fee:0,
            isPopular:false,
            features: [
              "All features from standard plan.",
              "Multi provider support.",
              "Priority customer support.",
              "Integration with electronis health record system."
            ],
        },
    ];

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pricing for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl shadow-sm border-2  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                                {item.isPopular?
                                (
                                    <span className='w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-sm text-gray-700 font-semibold'>Most Popular</span>
                               

                                ):""}
                               
                                <div className='flex flex-col gap-3'>
                                    <span className='text-indigo-600 font-medium uppercase tracking-widest'>
                                        {item.name}
                                    </span>
                                    <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                    <p className='text-xs'>{item.desc}</p>
                                    <div className="flex">
                                        <p>{item.fee}% transcation fee </p>
                                        <TooltipProvider>
  <Tooltip>
    <TooltipTrigger > <HelpCircle className='w-4 h-4 ms-2'/></TooltipTrigger>
    <TooltipContent className='bg-slate-900 text-white'>
      <p>paypal will charge normal transcation fee. </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
                                       
                                    </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <Check   className='h-5 w-5 text-indigo-600 flex-shrink-0'/>
                                             
                                                <p className='text-base'>{featureItem}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex-1 flex items-end">
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};