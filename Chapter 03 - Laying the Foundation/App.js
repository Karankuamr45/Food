import React from 'react';
import ReactDOM from 'react-dom/client';




const heading=(
<h1 id="heading" className='head'>
    this is a jsx Heading
    </h1>
    );



    // const Fun=()=> <h1>hgds</h1>

    // const Fun2=()=>{
    //     return  <h1>hgds</h1>
        
    // }


   


    const  HeadingComponent=()=>{
        return <h1>Namaste React functionl compponent</h1>
    }

    // const Heading2=()=><div>
    //      <h1>This is an heading Component</h1>
    //      <h1>This is an heading Component</h1>
    //      <h1>This is an heading Component</h1>
    // </div>


    const jsxElement=(<div>
       < h1>jsx Elmenent</h1>
    <h2>
        jhgfsfd
    </h2>
    </div>)

    const Heading3=()=>(
        <div>
            {jsxElement}
            <h1>Helool,jbsgb</h1>
            <h1>Helool,jbsgb</h1>
            <h1>Helool,jbsgb</h1>
           <HeadingComponent></HeadingComponent>
           <HeadingComponent/>
           {HeadingComponent()}

        </div>
    )





    

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxElement)