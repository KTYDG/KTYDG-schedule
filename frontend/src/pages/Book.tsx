import { Outlet } from 'react-router-dom';
import SideLink from '../components/SideLink';

const Book = () => {
  return (
    <main className='w-screen h-screen px-4 py-4 bg-main xl:py-8 md:px-8 xl:px-18 2xl:px-44'>
      <div className='flex flex-row w-full h-full'>
        <div className='w-1/2 h-full bg-book rounded-2xl shadow-base_il_l z-30'>
        </div>
        <div className='flex flex-row w-1/2 h-full bg-transparent rounded-2xl'>
          <Outlet />
          <div className='flex flex-col w-10'>
            <SideLink to="/day">День</SideLink>
            <SideLink to="/week">Неделя</SideLink>
            <SideLink to="/goals">Цели</SideLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Book;