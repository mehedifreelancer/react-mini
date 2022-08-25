import { useState } from "react";

function FilterHome() {

    let infos =[

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
        // console.log(event);
    }

    return ( 
        <>
                <section className='w-25 mx-auto mt-5'>
                    <input onChange={liveType}  type='text' className='text  form-control' />

                    <div className='mt-4'>
                        <h4>Search results for "{type}"</h4>
                    </div>
                </section>


                <section id="allData" className='w-25 mx-auto mt-5'>
                    <br></br>

                    <h4>All Data ---</h4>
                    
                             {infos.filter((item) => {return item.title.includes(type)}).map(filteredName => (

                               
                                <li key={filteredName.id}>
                                {filteredName.title}
                                </li>
                                                            
                              ))}
                    
                </section>
        </>
     );
}

export default FilterHome;
<>

</>