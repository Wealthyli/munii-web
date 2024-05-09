import React from "react";
import Image from "next/image";
import comingSoon from '@/public/images/under_construction.png'
import { IoMdClose } from "react-icons/io";

interface Props {
  closeModal: () => void;
}

const ComingSoonModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content flex flex-col gap-3 items-center justify w-[90%] lg:w-[50%] md:py-12 ">
        <span className="close " onClick={closeModal}>
          <IoMdClose className="w-4 h-4"/>
        </span>
        <Image 
          src={comingSoon}
          alt="coming soon"
          className="lg:w-[60%] lg:h-[40%]"
        />
        <h2 className='font-semibold text-[24px] md:text-[32px]'>Coming Soon!</h2>
        <p className='text-center'>We are working hard to bring you our App. Stay tuned for updates.</p>
      </div>
    </div>
  );
};

export default ComingSoonModal;
