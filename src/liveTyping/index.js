import React, { useState }  from 'react';


function Home() {

    let data =[

        {
            key:1,
            title:'Our Test'
        },
        {
            key:2,
            title:'Hacking rank'
        },
        {
            key:3,
            title:'We are codder'
        },
        {
            key:4,
            title:'New and busy'
        },
        {
            key:5,
            title:'Solutions of problems'
        },



    ];
    const [type, setType]= useState('');

    let liveType = (event) =>{
        setType(event.target.value);
        console.log(event);
    }


    return ( 

        <>

        <section className='w-25 mx-auto mt-5'>
                    <input onChange={liveType}  type='text' className='text  form-control' />

                    <div className='mt-4'>
                        <h4>{type}</h4>
                    </div>
        </section>
            
        </>
     );
}

export default Home;