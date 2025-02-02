'use client'
import { PencilIcon, User } from 'lucide-react'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const page = () => {
const myProfileForm=[
  {
    label: 'Title',
    placeholder:'Mr',
    style:'',
    type:''
  },
  {
    label: '',
    placeholder:'',
    style:'opacity-0',
    type:'hidden'
  },
  {
    label: 'First Name',
    placeholder:'Joy',
    style:'',
    type:''
  },
  {
    label: 'Middle Name',
    placeholder:'Essien',
    style:'',
    type:''
  },
  {
    label: 'Last Name',
    placeholder:'Micheal',
    style:'',
    type:''
  },
  {
    label: 'Mobile',
    placeholder:'+234',
    style:'',
    type:'number'
  },
  {
    label: 'Email',
    placeholder:'+234',
    style:'',
    type:'text'
  },
  {
    label: 'User Name',
    placeholder:'essien',
    style:'',
    type:'text'
  },
  {
    label: 'Gender',
    placeholder:'Female',
    style:'',
    type:'text'
  },
  {
    label: 'Designation',
    placeholder:'Customer Management',
    style:'',
    type:'text'
  },
  {
    label: 'Enabled',
    placeholder:'Yes',
    style:'',
    type:'text'
  },
  {
    label: 'Staff ID',
    placeholder:'0011',
    style:'',
    type:'text'
  },
  {
    label: 'Address',
    placeholder:'Address',
    style:'col-span-2 max-w-[700px]',
    type:'text'
  },
  {
    label: 'City',
    placeholder:'Ikeja',
    style:'',
    type:'text'
  },
  {
    label: 'State',
    placeholder:'Lagos',
    style:'',
    type:'text'
  },
  {
    label: 'Country',
    placeholder:'Nigeria',
    style:'',
    type:'text'
  },
  {
    label: 'Zip Code',
    placeholder:'100223',
    style:'',
    type:'number'
  },
]

const [canEdit, setcanEdit] = useState(false)


  return (
    <div className='px-5'>
      <header>
        <div className=" flex items-start gap-3">
          <div className=" w-full">

          <h2 className=' py-2 w-full bg-gradient-to-r  from-pryColor/70 to-pryColor text-white font-medium px-1'>
            My Profile
          </h2>


          <form action="" className='px-2 py-7  space-y-5'>

<div className=' size-32 border-2'>
<label htmlFor="profilePic" >
      <input id='profilePic' type="file" accept='image/*' className='hidden'/>
        <User className=' stroke-gray-500 size-full stroke-1'/>
    </label>
</div>
<div className="grid grid-cols-2  gap-10">
{
  myProfileForm.map((inputs, index)=>{
    return(
      <InputField editable={canEdit} className={inputs.style} {...inputs} key={index}/>
    )
  })
}
</div>
  
  <div className="btn flex justify-between items-center gap-10 pt-20  ">
    <button className='max-w-[300px] w-full font-medium py-3 text-center rounded-lg bg-pryColor text-lg text-white'>
        Save
    </button>
    <button className=' max-w-[300px] w-full font-medium text-pryColor py-3 text-center rounded-lg border border-pryColor text-lg '>

        Cancel
    </button>

  </div>
  </form>
          </div>








          <button onClick={()=>setcanEdit(prev => !prev)} className='p-2 px-3 border border-pryColor font-medium gap-2 text-sm rounded flex items-center w-fit '>
            <PencilIcon className=' stroke-1 size-4'/>
Edit
          </button>
        </div>
      </header>


    </div>
  )
}


const InputField=({
  className,
  label,
  placeholder,
  type,
  editable
})=>{
  const styles = twMerge(`
    min-w-[300px]   border-b text-lg font-medium flex justify-between items-center
    `,className)

if(type === 'hidden'){
  return(
    <div/>
  )
}

  return(
    <div className={styles}>
    <label htmlFor="" className=' py-2  w-full max-w-[200px]'>{label}</label>
    <input type={type} disabled={!editable} className={`w-full h-full ${!editable ?' border-0 bg-transparent':' border'} `}
    placeholder={placeholder} />
  </div>
  )
}

export default page