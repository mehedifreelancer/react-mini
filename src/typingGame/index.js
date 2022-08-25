import {   useEffect, useState } from "react";
import poorImg from './images/poor.gif';
import goodImg from './images/good.gif';
import excellentImg from './images/excellent.gif';

function TypingGame() {



    const text = ['Lets start a journey now', 'Lorem ipsum is simply dummy', 'Text of the printing and', 'Has many variations of passages','The standard chunk of lorem','Adipiscing elit, sed do eiusmod '
                ,'Sed ut perspiciatis unde omnis','Quasi architecto beatae vitae dicta','You can also access each','You will get weird results','I came up with this function'
                ];


    const [index, setIndex] = useState(0);
    const textLength = text.length;

    const total_min = 2;
    const  [min , setMin] = useState(total_min);
    const [second, setSecond] = useState(0);

    const [typed , setTyped] = useState('');
    const [completed, setCompleted] = useState(-1);
    const [color, setColor] = useState('green');

  





    useEffect(()=>{
        setCompleted(completed+1);
        
    },[index])



    setTimeout(()=>{
        second == 0? (setSecond(60)) (setMin(min-1)) : setSecond(second-1);
      
    },1000);


    let getText = (limit) =>{
         let no = Math.floor(Math.random() * limit);
        setIndex(no);
    }


    let check = (e) =>{
        setTyped(e.target.value);
        checkErr(e.target.value);
    }

    let checkErr = (key) =>{
        for (var i = 0; i < typed.length; i++) {
            let typedChar = typed.charAt(i);
            let givenChar = text[index].charAt(i);
            typedChar == givenChar ? setColor('green'): setColor('red');
        }
    }

    

    let result = (completed*5)/ total_min;

    return (
        <>
                <section style={{minHeight:'70vh', maxWidth:'550px', width:'90%'}} className='m-auto  mt-5 border shadow p-5 rounded'>

                    <div className="alert alert-info text-center fs-7">
                     <b>Research says: </b>The minimum typing speed is around 40 words per minute..
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-center">{min <  0 ? '' : 'Time: '}<span><span>{min <  0 ? 'Time Out !!' : min}</span>:{min < 0 ? '' : second}</span></h5>
                    <span className="badge bg-info align-items-center d-flex">Completed : {completed}</span>
                    </div>


                {
                    min < 0?
                    
                    <>
                    <h4 className="text-center">Your typing speed is : {result} word/min</h4>
                    <br></br>
                    {result < 11 ? <div className="text-center fw-bold text-danger fs-5"><p > Very poor speed !</p> <a><img className="img-fluid" src={poorImg} /></a></div>:''}
                    {result > 10 && result <31 ? <div className="text-center fw-bold text-danger fs-5"><p >  Poor speed !</p> <a><img className="img-fluid" src={poorImg} alt={poorImg} /></a></div>: ''}
                    {result > 30 && result < 61 ? <div className="text-center fw-bold text-success fs-5"> <p > Congrast ! Good speed !</p> <a><img className="img-fluid" src={goodImg} alt={goodImg} /></a> </div> : ''}
                    {result > 60 && result < 101 ? <div className="text-center fw-bold text-success fs-5"><p > Congrast ! Excellent speed !</p> <a><img className="img-fluid" src={excellentImg} alt={excellentImg} /></a></div> : ''}


                    </>
                   

                    :  <>


                    <input onKeyUp={check}  type='text' className='text  form-control' />

                    <div className="mt-5">
                        <h5 className="text-info">*Type* : {text[index]} </h5>
                        <p>{typed === text[index] ? getText(text.length) :''}</p>

                        <div style={{width:'fit-content'}} className="position-relative ">
                            <div style={{zIndex:'-1', backgroundColor:color}} className="position-absolute w-100  h-100 text-white"></div>
                            <span className="text-white p-1">{typed}</span>
                        </div> 
                    </div>
                </>
                    
                }
                </section>

        </>  
    );
}

export default TypingGame;