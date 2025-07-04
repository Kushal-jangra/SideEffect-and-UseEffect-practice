import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({open  , children , onclose}){
  const dialog = useRef();
  useEffect(() =>{
    if(open){
      dialog.current.showModal();
    }else{
      dialog.current.close();
    }
  }, [open])

  return createPortal(
    <dialog className="modal" ref = {dialog} onClose={onclose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};
