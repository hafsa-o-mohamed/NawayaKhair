import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { useEffect, useRef, useState } from "react";


export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }



const ContactUs = () =>{

      const ref1 = useRef();
      const isVisible1 = useIsVisible(ref1);
  
      const ref2 = useRef();
      const isVisible2 = useIsVisible(ref2);
  
    return(

        <div>
                <div>
        <section  ref={ref1}  className={` bg-white transition-opacity fadeUp delay-75 duration-1000  ${isVisible1 ? "opacity-100" : "opacity-0"}`} >
            <div class= "grid max-w-screen-xl h-screen py-8 px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 font-body text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">  حلولك الرقمية تبدأ من 
                       <span class="text-secondary " > هنا  </span>
                    </h1>
                    <p class="max-w-2xl mb-6 font-body font-light text-balance text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                    احصل على خدمات رقمية احترافية ومتكاملة من أول تطوير التطبيقات و المواقع والمتاجر الإلكترونية مروراً بالتصاميم الجرافيكية بأنواعها وحتى باقات متنوعة من خدمات التسويق الإلكتروني مقدمة من فريقنا المتميز.                        </p>
                    <a href="https://api.whatsapp.com/send?phone=00966508939946&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20"
                     class="inline-flex items-center justify-center px-5 py-3 me-3 text-base font-medium text-center text-white rounded-lg border-gray-700 bg-secondary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                        ابدأ الآن
                    </a>

                    <a href="pdf/ProfileNawayaKhair.pdf" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                        البروفايل التعريفي
                    </a> 

                    <div class="flex flex-row items-center gap-4 font-body text-sm font-semibold py-4">
                        <div class="flex flex-row items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                              </svg>
                              
                            <p>خدمة سريعة</p>
                        </div>
                        <div class="flex flex-row items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                              </svg>
                                                       
                            <p>دعم فني</p>
                        </div>
                        <div class="flex flex-row items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                              </svg>                            
                            <p>حلول متكاملة</p>
                        </div>

                    </div>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img class="rounded-lg w-full h-full object-cover" src="img/service1.jpg"/>
                      </div>
                </div>                
            </div>
            
        </section>
 
</div>
<div  ref={ref2}    className={` bg-white transition-opacity fadeUp delay-75 duration-1000  text-black p-14 ${isVisible2 ? "opacity-100" : "opacity-0"}`} id="contact">
    <div class="mx-auto  max-w-screen-md font-body text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            نرحب
            <span class="text-secondary"> بتواصلك </span>
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl ">نحن نقدم حلولاً إلكترونية مبتكرة تتكامل بين التسويق الفعّال وبرمجة المواقع والتطبيقات بأعلى جودة واهتمام بالتفاصيل</p>
    </div>
     
<ContactForm/>

</div>
</div>
    )
}
export default ContactUs;