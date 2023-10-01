'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';

const Notifications = () => {

  return (
    <div className="flex space-x-2 place-content-center w-full">
      <div className='flex flex-col space-y-2 justify-items-center'>
        <MainNav></MainNav>
        <SubNav></SubNav>
        <NavProfile/>
      </div>
      <div className='p-3 flex bg-white dark:bg-neutral-800 rounded-xl w-5/12 flex-col ease-out duration-200 px-5 py-2'>
        <h1 className='text-xl mb-5  self-center text-neutral-400'>Notificações</h1>
      </div>
    </div>

  )
}

export default Notifications
