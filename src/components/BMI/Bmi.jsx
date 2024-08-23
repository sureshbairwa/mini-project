import React, { useState } from 'react'

const Bmi = () => {

    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);
    const [bmi,setBmi] = useState("");
    const [message,setMessage] = useState("");

const bmiCal = (e)=>{

    e.preventDefault();

    if(weight===0 || height===0){
        alert("invalid input");
        // window.location.reload();

    }else{
        let bmi=weight/(height*height);
        setBmi(bmi.toFixed(1));
        if(bmi<18.5){
            setMessage("you are underweight( Din me 2 bar kha rahe ho)");
        }else if(bmi>=18.5 && bmi<24.9){
            setMessage("You are healthy(Din me 3 bar kha rahe ho)");
        }else{
            setMessage("you are overweight(Din me 4 bar kha rahe ho)");
        }
    }

    



}

 const reload=()=>{
    window.location.reload();
 }


  return (

    
    <div className=' flex flex-row justify-center mt-40 border w-80 bg-lime-400 border-2 border-indigo-600 bg-purple-300'>
       
       <div className="mt-10 flex flex-col items-center justify-center ">
        <form action="" onSubmit={bmiCal}>
            <div className='flex flex-col items-center justify-center'>
            <div className=" ">
            <label htmlFor="" className=''>Enter Weight (kg)</label>
            <br/>
            <input className='mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-blue-400' type="number" placeholder='weight' value={weight} onChange={(e)=> setWeight(e.target.value)}/>

            </div>
            <div className="">
            <label htmlFor="">Enter height (meter)</label>
            <br/>
            <input className='mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="number" placeholder='height' value={height} onChange={(ev)=> setHeight(ev.target.value)} />

            </div>
            <div className="">
                <button className='bg-blue-400 mt-5 pl-10 pr-10 pt-1 pb-1' type='submit'>Submit</button>
            </div>
            <div className="">
                <button className='bg-slate-400 mt-5 pl-10 pr-10 pt-1 pb-1' onClick={reload} type='submit'>
                    Reload
                </button>
            </div>
            
            </div>
        </form>
            <span className='mt-3 text-slate-500 '> Your BMI is {bmi}</span>
            <span className='mt-2 mb-3 text-blue-500'>{message}</span>

            {/* <span>{height}</span>
            <span>{weight}</span> */}
       </div>
     
    </div>
  )
}

export default Bmi
