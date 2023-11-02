'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import CreateVaga from '@components/Widgets/CreateVaga';
import { useState } from 'react';

const Vagas = () => {

  const [isCreateVagaVisible, setCreateVagaVisible] = useState(true);

  const handleCloseCreateVaga = () => {
    setCreateVagaVisible(false);
  };

  const handleToggleCreateVaga = () => {
    setCreateVagaVisible(!isCreateVagaVisible); // Inverte o estado de visibilidade
  };

  return (
    <div className="flex space-x-2 place-content-center overflow-hidden w-full">
      <div className='flex flex-col space-y-2 justify-items-center'>
        <MainNav></MainNav>
        <SubNav></SubNav>
        <NavProfile/>
      </div>
      <div className='p-3 flex bg-white dark:bg-neutral-800 rounded-xl w-5/12 flex-col ease-out duration-200 px-5 py-2'>
          <h1 className='text-xl mb-5  self-center text-neutral-400'>Vagas</h1>
        <button onClick={handleToggleCreateVaga}><img src="/assets/icons/criarvaga.svg" className='mr-2'></img></button>
      </div>
      {isCreateVagaVisible && <CreateVaga handleCloseCreateVaga={handleCloseCreateVaga} />}
    </div>

  )
}

export default Vagas
