import React from 'react'

const Delivery = () => {
  return (
    <div className='w-[1320px] bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>
            Quick Delivery App
        </h3>
        <div className='w-full mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt=""
            className='w-[550px] mx-auto my-4'
             />
             <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                Limitless Convenience on-demand 

                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum veniam blanditiis soluta aliquam minima cumque velit ad atque suscipit dolores doloribus, perferendis cupiditate similique facere praesentium quos corrupti? Nostrum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam blanditiis, assumenda et perspiciatis placeat alias quaerat exercitationem quae quibusdam numquam voluptatem laborum fuga necessitatibus ab ipsum aliquid neque? Commodi!
                </p>
                <button className='bg-black text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>

             </div>

        </div>
    </div>
  )
}

export default Delivery