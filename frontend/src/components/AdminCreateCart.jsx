import React, { useContext, useState } from 'react'
import axios from 'axios'

const AdminCreateCart = () => {
    const [formdata, setformdata] = useState({
        itemname: '',
        price: '',
        color: '',
        description: '',
        file: null,
    });

    const Submithandler = async (e) => {
        e.preventDefault();
        console.log("Submitted");
        try {
            const response = await axios.post('http://localhost:3000/admin/uploadproduct', formdata, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response) {
                setformdata({
                    itemname: '',
                    price: '',
                    description: '',
                    color: '',
                    file: ' '
                });
                
            }
            console.log(response.data)
            
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const Changehandler = (e) => {
        const { name, value, files } = e.target;
        setformdata({
            ...formdata,
            [name]: name === 'file' ? files[0] : value,
        });
    }


    return (


        <div class="absolute p-4 rounded-2xl w-[25rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow">
            <h2 class="text-2xl font-bold mb-6 text-center">Upload Product</h2>
            <form onSubmit={Submithandler} enctype="multipart/form-data">
                <div class="mb-4">
                    <label for="item-name" class="block text-gray-700">Item Name:</label>
                    <input
                        type="text"
                        id="item-name"
                        name="itemname"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        onChange={Changehandler}
                        value={formdata.itemname}
                        required />
                </div>
                <div class="mb-4">
                    <label for="item-color" class="block text-gray-700">Item Color:</label>
                    <input
                        type="text"
                        id="item-color"
                        name="color"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        onChange={Changehandler}
                        value={formdata.color}
                        required />
                </div>
                <div class="mb-4">
                    <label for="price" class="block text-gray-700">Price:</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        type="text"
                        id="price"
                        name="price"
                        step="0.01"
                        onChange={Changehandler}
                        value={formdata.price}
                        required
                    />

                </div>

                <div class="mb-4">
                    <label for="description" class="block text-gray-700">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none"
                        required
                        onChange={Changehandler}
                        value={formdata.description}>
                    </textarea>
                </div>

                <div class="mb-4">
                    <label for="file" class="block text-gray-700">Choose file to upload:</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        required
                        onChange={Changehandler}
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Upload"
                        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" />
                </div>
            </form>
        </div>

    )
}

export default AdminCreateCart