import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeUpdate = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form.name.value);
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(coffee);

        fetch(`http://localhost:3000/coffee/${_id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(coffee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'You update a coffee',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
    })
        
    }

    return (
        <div className='p-20 bg-[#F4F3F0]'>
            <h2 className='text-center text-3xl font-extrabold mb-4'>Please Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className='md:flex gap-4 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Coffee</span>
                            <input type="text" name='name' placeholder="name"
                            defaultValue={name}
                             className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name='quantity' placeholder="qunatity"
                            defaultValue={quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-4 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name='supplier' placeholder="supplier"
                            defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name='taste' placeholder="taste" 
                            defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-4 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" name='category' placeholder="category" 
                            defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name='details' placeholder="details"
                            defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-4 mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <span>URL</span>
                            <input type="text" name='photo' placeholder="photo url"
                            defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Update Coffee" className='btn btn-neutral w-full' />
                </div>
            </form>
        </div>
    );
};

export default CoffeeUpdate;