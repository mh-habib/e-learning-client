import React from 'react';
import { useForm } from "react-hook-form";
import BookingSidebar from '../BookingSidebar/BookingSidebar';

const containerStyle = {
    backgroundColor: "#ADD8E6",
}
const Review = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            // .then(response => console.log('Success Report:', response))
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Review Send Successfully!!!');
                }
            })
    }

    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-3 col-sm-12 col-12">
                <BookingSidebar></BookingSidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12">
                <h1 className="text-info text-center pt-5 mb-3">Give a Review About Our Service </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table className="mt-5 mx-auto">
                        <tbody>
                            <tr>
                                <td className="w-100"><input className="form-control py-3 pr-3" name="name" placeholder="Course Name" {...register("name")} /></td>
                            </tr>
                            <tr>
                                <td className="w-100"><input className="form-control py-3 pr-3 mt-2" name="designation" placeholder="Designation" {...register("designation")} /></td>
                            </tr>
                            <tr>
                                <td className="w-100"><textarea className="form-control py-3 pr-3 mt-2" placeholder=""name="message" placeholder="Write a Review" {...register("message")} /></td>
                            </tr>
                            
                            <tr>
                                <td><input className="btn btn-primary mt-2" type="submit" /></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>

    );
};

export default Review;