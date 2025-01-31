import React, { useState } from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { CiGrid2H } from "react-icons/ci";
import Cart from './cart';

const Sortedicons = () => {
  const [forGrid, setForGrid] = useState(true);
  const [twoGrid, setTwoGrid] = useState(false);
    const producInfo = [
        
              {
                image: "https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ=",
                name: "AstroX Sonic",
                price: 2999,
                color: "Black",
                headphoneType: "On-ear headphone",
                id: 1
              },
              {
                image: "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
                name: "Echo Beats Pro",
                price: 3499,
                color: "White",
                headphoneType: "In-Ear headphone",
                id: 2
              },
              {
                image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?cs=srgb&dl=pexels-parag-deshmukh-180046-577769.jpg&fm=jpg",
                name: "BassMaster 5000",
                price: 4999,
                color: "Blue",
                headphoneType: "Over-Ear headphone",
                id: 3
              },
              {
                image: "https://cdn.shopify.com/s/files/1/0608/4988/1306/files/roar-301-headphone.png?v=1667291051",
                name: "ZenAudio Lite",
                price: 1999,
                color: "Red",
                headphoneType: "On-Ear headphone",
                id: 4
              },
              {
                image: "https://images-cdn.ubuy.co.in/6587417bae7bb0463e32498e-sony-wh-1000xm5-the-best-wireless-noise.jpg",
                name: "PulseWave Ultra",
                price: 3999,
                color: "Green",
                headphoneType: "Over-Ear headphone",
                id: 5
              },
              {
                image: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
                name: "PulseWave Ultra",
                price: 3999,
                color: "Green",
                headphoneType: "Over-Ear headphone",
                id: 6
              },
              {
                image: 'https://m.media-amazon.com/images/I/7179kqSfnAL.jpg',
                name: 'Zebronics',
                price: 625,
                color: 'Black',
                headphoneType: 'Over-Ear headphone',
                id: 7
              },
              {
                image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBqpSPhq5lbHdrVPdhMHYIFsMElDhORHEjJWfDAaW18mJaGD7GcxqjzuNCNW-dApgUTC-siEDAhx51xQtn4tIXtstOSCIC-itwetWOQRE',
                name: 'Zebronics',
                price: 700,
                color: 'LighBlue',
                headphoneType: 'Over-Ear headphone',
                id: 8
              },
              {
                image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9QW_S3P99bvXxL2wMA-6d-43bcLJ-xvw6qxQYIg8uyg_S43QKOzLRoCSC9-IeMdjcqYzrl58Xipui08JunrgPGkoCUPvxi9Q0dwIABd6w57M9hyIcpaLKJA',
                name: 'Noise Airwave',
                price: 3000,
                color: 'Black',
                headphoneType: 'Over-Ear headphone',
                id: 9
              },
              {
                image: 'https://images.meesho.com/images/products/439123043/dqywy_1200.jpg',
                name: 'Zebronics Boom',
                price: 700,
                color: 'Black',
                headphoneType: 'Over-Ear headphone',
                id: 10,
              },
              {
                image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeoQ2TurVLi5bbrK3_vn6rg0Riztzg5089jSlLu1jNzqpfBE03MKxxNckOnho0Plw5BgN42B_EgKmEDC5V4Y7fPb1LgLn9d4tAxGkecY4JjA8k4btyMxr9kw',
                name: 'Sony',
                price: 8000,
                color: 'LigtBlue',
                headphoneType: 'Over-Ear headphone',
                id: 11
              },
              {
                image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMxS9Ojr2aToX0cnNMYk2L_8shwRXWIvHPE1xw2VwKf0lPNz2IG8HZdm3UxkuPoY9-vLibc-KezPlJhpp5vJhPGHrUaSiv2qeAQDuy6Uk',
                name: 'Jbl Tune',
                price: 5000,
                color: 'LigtZinc',
                headphoneType: 'Over-Ear headphone',
                id: 12
              },
              {
                image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTx5ZRNTjUM7a1EToXrRSlydQ3wCBqB_Md_e0DWHmt97tsgHfMWEAyGRN7kdDAiPo0-a_t6CulxoRWAdNAWY_GZdvaUA05yubYd5p9dpAG68jhxUXQSBw8-BsI',
                name: 'Sony',
                price: 5000,
                color: 'LigtGray',
                headphoneType: 'Over-Ear headphone',
                id: 13
              },
            
            ];
    const GridForHandler = () =>{
      setForGrid(true);
      setTwoGrid(false);
    }
    const GridTwoHandler = () => {
      setForGrid(false);
      setTwoGrid(true);
    }        
          
    return (
        <div>
            <div className='flex w-full justify-between items-center mt-6'>
            <div className='flex items-center gap-4'>
                <div><PiSquaresFour onClick={GridForHandler} className='bg-black text-white rounded p-0.5' size={24} /></div>
                <div><CiGrid2H onClick={GridTwoHandler} className='bg-black text-white rounded p-0.5'  size={24}/></div>
                <div>
                    <select className='bg-[#cecccc] outline-none rounded-full p-1.5' defaultValue="">
                        <option value="" disabled>Headphones Type</option>
                        <option value="featured">Featured</option>
                        <option value="in-ear">In-ear headphone</option>
                        <option value="on-ear">On-ear headphone</option>
                        <option value="over-ear">Over-ear headphone</option>
                    </select>

                </div>
                <div>
                    <select className='bg-[#cecccc] outline-none rounded-full p-1.5' defaultValue="">
                        <option value="" disabled>Company</option>
                        <option value="featured">JBL</option>
                        <option value="in-ear">Sony</option>
                        <option value="on-ear">Boat</option>
                        <option value="over-ear">Zebronics</option>
                    </select>

                </div>
                <div>
                    <select className='bg-[#cecccc] outline-none rounded-full p-1.5' defaultValue="">
                        <option value="" disabled>Colour</option>
                        <option value="featured">Blue</option>
                        <option value="in-ear">Black</option>
                        <option value="on-ear">White</option>
                        <option value="over-ear">Brown</option>
                    </select>

                </div>
                <div>
                    <select className='bg-[#cecccc] outline-none rounded-full p-1.5' defaultValue="">
                        <option value="" disabled>Price</option>
                        <option value="featured">0 - ₹1,000</option>
                        <option value="in-ear">₹1,000 - ₹10,000</option>
                        <option value="on-ear">₹10,000 - ₹20,000</option>

                    </select>
                </div>
            </div>
            <div>
                <select className='bg-[#cecccc] outline-none rounded-full p-1.5' defaultValue="">
                    <option value="" disabled>Sort by: Featured</option>
                    <option value="featured">Price : Lowest</option>
                    <option value="in-ear">Price : Highest</option>
                    <option value="on-ear">Name: (A-Z)</option>

                </select>
            </div>
            </div>
            <div className={`flex ${forGrid ? 'flex-row' : twoGrid ? 'flex-col' : ''} flex-wrap gap-4 mt-12`}>
            {producInfo.map((items,idx)=>{
               return <Cart key={idx} items={items} forGrid={forGrid} twoGrid={twoGrid}/>
            })}
            </div>
            
            
        </div>
    )
}

export default Sortedicons