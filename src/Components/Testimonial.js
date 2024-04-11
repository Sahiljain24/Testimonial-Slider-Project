import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import {useState} from "react"


const Testimonial=(props)=>{
  let reviews= props.reviews;
  const [index,setIndex] =useState(0);


   function lefthandler(){

    if(index-1<0){
        setIndex(reviews.length-1);
    }else{
        setIndex(index-1);
    }
   }



   function rigthHandler(){
    if(index+1>reviews.length-1)
    setIndex(0);
    else
    setIndex(index+1);
   }


   function SurpriseHandler(){
     let num = Math.floor(Math.random()*reviews.length);
     setIndex(num);
   }


    return(
        <div className="w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700  hover:shadow-xl">
             
                 
                    <Card review={reviews[index]}></Card>
              
           

            <div className="flex text-3xl mt-5 gap-[-3] text-violet-400 font-bold mx-auto pb-2">
                    <button onClick={lefthandler} className="cursor-pointer hover:text-violet-500">
                        <FiChevronLeft/>
                    </button>
                    <button onClick={rigthHandler} className="cursor-pointer hover:text-violet-500">
                        <FiChevronRight/>
                    </button>
                </div>
                <div>
                    <button onClick={SurpriseHandler} className="bg-violet-800 hover:text-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font bold text-white text-lg">Surprise Me</button>
                </div>    
        </div>
    );
}

export default Testimonial