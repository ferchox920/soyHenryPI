import React, { useState } from "react";
import styles from "./Paginate.module.css";

const Paginate = ({ pagina, setPagina, max }) => {
  const [input, setInput] = useState(1);
  const nextPage = ()=>{
    setInput(input+1)
    setPagina(pagina+1)}

  const backPage = ()=>{
   
        setInput(input-1)
        setPagina(pagina-1)

    
  }
  const onKeyDown=(e)=>{
    if(e.keyCode==13){
        setPagina(parseInt(e.target.value))
        if(parseInt(e.target.value)<1||parseInt(e.target.value)>Math.ceil(max)|| isNaN(parseInt(e.target.value))){
            setPagina(1)
            setInput(1)
        }else{
            setPagina(parseInt(e.target.value))
        }
    }
  }
  const onChange=(e)=>{
    setInput(e.target.value)
  }
  return (
    <div className={styles.container}>
      <button disabled={pagina===1||pagina<1} className={styles.prevB}
      onClick={backPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <input onChange={onChange} onKeyDown={e=>onKeyDown(e)} name="page" value={input} autoComplete="off" />
      <p>de {Math.round(max)}</p>
      <button className={styles.nextB}
      disabled={pagina===max||pagina>max}
      onClick={nextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Paginate;
