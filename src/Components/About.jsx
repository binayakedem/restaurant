import React from 'react'
import chef from '../assets/chef.png'
import myjson from './myjson.json'
const About = () => {
    const data=myjson.foodData
  return (
    <div className='mx-4 md:mx-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
            <div className='overflow-hidden '>
                <img className='h-full w-auto object-cover' src={chef} alt="chef" />
            </div>
            <div>
            <h1 className='text-start text-green-600 font-bold md:text-xl font-briem my-2 md:my20'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi voluptates cupiditate repudiandae enim? Iste, nihil. Maxime hic eveniet, voluptatem dolor, inventore rem eos quas, voluptas molestias autem incidunt tempora eligendi commodi. Temporibus necessitatibus explicabo eos tempora iste consequatur, repellendus deleniti consectetur magnam? Voluptatum repudiandae aliquid aliquam fugiat magnam ut nobis, vitae quos ratione assumenda, ipsam nulla voluptate esse eveniet minima ullam vero possimus atque quae natus consectetur tempore beatae quod accusamus. Natus aut aperiam deserunt est vero sit a voluptate in dolorum sint. Sed debitis quasi nisi ex, sunt aliquam expedita adipisci necessitatibus. Deleniti id suscipit dolore, doloremque similique officia aliquam? Tempore necessitatibus itaque culpa, fugit nesciunt saepe aliquid debitis laudantium sint tempora beatae quibusdam porro quod eaque non recusandae explicabo reprehenderit doloribus magni totam dolorem distinctio? Est, sed qui natus earum, explicabo, dolore id cupiditate rem commodi debitis voluptatem laboriosam deleniti dolores maiores? Eius modi laboriosam ipsam. Doloribus, explicabo necessitatibus, ea eligendi obcaecati officia cupiditate quis dolorum itaque soluta accusamus. In quae velit, ipsa tempore totam fuga eaque amet vitae pariatur accusantium recusandae modi non vel maxime doloribus, cumque commodi corrupti perferendis, voluptate facere. Laudantium, facilis consectetur rem numquam voluptate corrupti accusantium veniam et, commodi maiores illo esse!</p>
            </div>

        </div>
        
        <h1 className='text-center text-green-600 font-bold md:text-xl font-briem my-2 md:my20'>Best Products </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
            {
                data.map((d, index)=>(
                    
        <div key={index} className="group relative overflow-hidden cursor-grab">
        <img
  src={d.image}
  alt='this is chef'
  className="w-full  cover transition ease-in-out group-hover:scale-150 hover:animate-spin duration-500"
/>
      <div className="absolute inset-0 bg-gray-800/60 opacity-50 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center text-white text-center">
        <h3 className="text-xl font-bold ">{d.name}</h3>
      </div>
    </div> 
))
}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 my-2 md:my-10 bg-green-50'>
            <div>
            <h1 className='text-start text-green-600 font-bold md:text-xl font-briem my-2 md:my20'>Facility</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis eaque incidunt nisi quae omnis. Tempora, voluptas doloremque placeat, exercitationem nemo quisquam impedit quia repellat eos dolorum repellendus quod suscipit esse labore accusantium sit commodi, eius iusto. Consectetur quae consequatur officiis voluptate repudiandae adipisci dolor earum dignissimos ipsa nobis maxime incidunt, voluptatem ex hic expedita! Dolores a consequatur doloribus facere sunt iste, magnam porro perferendis officia repellendus atque, quam error? Facilis, ipsa, autem quas fugiat consectetur aliquid perspiciatis officia, numquam perferendis consequatur sapiente id similique vel neque corporis? Optio, accusantium. Aperiam minus nulla eveniet corporis, iste aliquam vero nisi atque?</p>
            </div>
            <div className='overflow-hidden '>
                <img className='h-full w-auto object-cover' src="https://i.pinimg.com/1200x/73/aa/6f/73aa6fcc2dbb8f0a2ec6f5ee4eeffb15.jpg" alt="pic" />
            </div>
        </div>
    </div>
  )
}

export default About