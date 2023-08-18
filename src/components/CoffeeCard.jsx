import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleCoffeeDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {  
            fetch(`http://localhost:3000/coffee/${_id}`, {
            method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount> 0){
                        Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                    }
                })

            }
          })
    }
    return (
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" style={{height:"200px"}}/></figure>
                <div className="flex justify-between w-full mx-4">
                    <div className=''>
                        <h2 className="card-title">{name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Taste: {taste}</p>
                        <p>Category: {category}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical">
                            <button className="btn mb-2">Show</button>
                            <Link to={`/update/${_id}`}>
                                <button className="btn mb-2">Edit</button>
                            </Link>
                            <button className="btn" onClick={() => handleCoffeeDelete(_id)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CoffeeCard;