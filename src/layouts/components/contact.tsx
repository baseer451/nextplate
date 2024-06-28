'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  product: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
          try {
        await sendEmail(data); // Assuming sendEmail is an async function that sends email
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle error sending email (e.g., show error message to user)
      } finally {
        reset(); // Reset the form after successful submission or error
      }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
        <input
          id="name"
          type="text"
          className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input
          id="email"
          type="email"
          className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="name@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product</label>
        <select
          id="product"
          className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          {...register('product', { required: 'Please select a product' })}
        >
          <option value="">Select a product</option>
          <option value="The Studio">The Studio</option>
          <option value="20FT Preminiuim">20FT Premiuim</option>
          <option value="40FT Preminium">40FT Premiuim 3</option>
        </select>
        {errors.product && <span className="text-red-500 text-sm">{errors.product.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
        <textarea
          id="message"
          className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          rows={4}
          placeholder="Enter your message here"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      </div>

      <button type="submit" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
        Submit
      </button>
    </form>
  );
};

export default Contact;

