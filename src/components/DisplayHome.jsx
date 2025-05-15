import React from 'react'
import Navbax from './Navbax'
import  { albumsData,songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import Songitem from './Songitem'

const DisplayHome = () => {
  return (
    <>
    <Navbax />
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>featured charts</h1>
      <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
    </div>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
      <div className='flex overflow-auto'>
         {songsData.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome