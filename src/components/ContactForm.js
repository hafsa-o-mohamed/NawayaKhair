import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const form = useRef();
  const { register, handleSubmit, resetField, formState: { errors } } = useForm();

  const sendEmail = (e) => {

    emailjs
      .sendForm('service_3ywpzoo', 'template_dwkmsum', form.current, {
        publicKey: 'EdKHzENV2WYoEYuZs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      resetField("user_name")
      resetField("user_email")
      resetField("message")

  };

  return (
    <div class="md:px-48">
    <div class="grid  md:grid-cols-3 justify-stretch gap-3 mb-8  text-black  ">
        <div class=" rounded-xl  bg-opacity-10 hover:border hover:border-outline  py-6  " >

              <div class="flex justify-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex justify-center fill-secondary stroke-none w-10   ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                    <p class="font-body text-center p-2 text-xl" >اتصل بنا</p>
                    <p class="font-body  text-center text-sm text-balance " >987654321123+</p>

            </div>
           
            <div class="rounded-xl  bg-opacity-10 hover:border hover:border-outline 
             py-6" >
              
                <div class="flex justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex justify-center stroke-secondary w-10 self-center ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                  </div>


                    <p class=" font-main text-center p-2 text-xl" >تواصل معنا </p>
                    <p class=" font-body  text-center text-sm text-balance  " >info@nawayakhir.com</p>
            </div>

            <div class="rounded-xl  bg-opacity-10  hover:border hover:border-outline  py-6" >
                
              <div class="flex justify-center ">
        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex justify-center fill-secondary stroke-none w-10   ">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                  
                  
              </div>

                  <p class=" font-main text-center p-2 text-xl" >العنوان</p>
                    <p class="px-4  font-body text-center text-sm  text-balance" >الرياض , حي الملك سلمان, شارع عثمان بن عفان</p>

            </div>
        </div>

<form ref={form}   class="grid   md:grid md:grid-cols-2 gap-6  justify-stretch text-black   ">
    <div class=" form-control w-full col-span-2 md:col-span-1 bg-gray-50 rounded-lg shadow-sm border border-gray-300 bg-opacity-10  hover:border hover:border-outline   p-3">
        <input type="text" id="username"  name="user_name" autocomplete="username" class="text-sm w-full h-full rounded-lg bg-transparent indent-4   " placeholder="الاسم" {...register("user_name")} />
    </div>

    <div class="form-control w-full col-span-2 md:col-span-1 bg-gray-50 rounded-xl shadow-sm border border-gray-300 bg-opacity-10  hover:border hover:border-outline   p-3">
        <input type="email" name="user_email" id="email" autocomplete="email" class="text-sm w-full h-full rounded-lg bg-transparent indent-4   " placeholder="الايميل" {...register("user_email")} />
    </div>



    <div class="w-full col-span-2  md:col-span-2">
        <div class="form-control bg-gray-50 rounded-xl shadow-sm border border-gray-300 bg-opacity-10  hover:border hover:border-outline   p-3">
            <textarea type="text" name="message" rows="4" id="message"  class=" text-sm w-full rounded-lg bg-transparent indent-4  " placeholder="اكتب رسالة" {...register("message")} ></textarea>
        </div>
    </div>
    <div class=" col-span-2 flex flex-col justify-center items-center w-full">
        <button onClick={handleSubmit(sendEmail)}  type="submit" value="Send"  class="self-center border border-outline rounded-full  bg-secondary text-white text-lg shadow-lg  font-body px-4 py-2"> ارسل رسالة </button>
    </div>


</form>
</div>

  );
};