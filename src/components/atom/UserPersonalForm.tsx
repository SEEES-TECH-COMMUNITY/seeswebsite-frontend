/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { type FC } from 'react';

// export interface IuserPersonalFormProps {
// }

const UserPersonalForm = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex flex-col items-center gap-y-4 mt-4'>
          <input type="text" placeholder='First Name' className="w-full py-3 rounded-lg border-2 h-fit placeholder-blue-placeholder-600 text-blue-placeholder-600 text-bold border-transparent bg-grey-600 pl-3 pr-12 font-sans text-md placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ease-in duration-300 transition-colors"/>

          <input type="text" placeholder='Last Name' className="w-full py-3 rounded-lg border-2 h-fit placeholder-blue-placeholder-600 text-blue-placeholder-600 text-bold border-transparent bg-grey-600 pl-3 pr-12 font-sans text-md placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ease-in duration-300 transition-colors"/>
  
          <input type='date' placeholder='Date of Birth' className="w-full py-3 rounded-lg border-2 h-fit placeholder-blue-placeholder-600 text-blue-placeholder-600 text-bold border-transparent bg-grey-600 pl-3 pr-12 font-sans text-md placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ease-in duration-300 transition-colors"/>

          <input type='text' placeholder='State Of Origin' className="w-full py-3 rounded-lg border-2 h-fit placeholder-blue-placeholder-600 text-blue-placeholder-600 text-bold border-transparent bg-grey-600 pl-3 pr-12 font-sans text-md placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500 ease-in duration-300 transition-colors"/>
        </div>
    </div>
  );
}
export default UserPersonalForm;