import React from "react";

type SheetProps = {
  children: React.ReactNode,
}

const Sheet = ({children}: SheetProps) => {
  return (
    <div className='flex flex-grow flex-col w-1/2 bg-book rounded-s-2xl shadow-base_ir_r p-10'>
      {children}
    </div>
  );
};

export default Sheet;