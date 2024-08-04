import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";

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

const Home = () =>{

    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);

    const ref4 = useRef();
    const isVisible4 = useIsVisible(ref4);

    const ref5 = useRef();
    const isVisible5 = useIsVisible(ref5);

    const ref6 = useRef();
    const isVisible6 = useIsVisible(ref6);

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
    <div  ref={ref2}  className={` bg-white transition-opacity fadeUp delay-75 duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`} >
        <section  class="bg-neutral-100 " >
            <div class=" py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 font-body">
                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                              مايجعلنا خيارك   
                            <span class="text-secondary"> الأول      </span>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 sm:text-xl ">نحن نقدم حلولاً إلكترونية مبتكرة تتكامل بين التسويق الفعّال وبرمجة المواقع والتطبيقات بأعلى جودة واهتمام بالتفاصيل</p>
                    </div>
                </div>
                <div class="font-body  text-center space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0">

                    <div class="flex flex-col items-center bg-neutral-300/5  rounded-xl p-12 shadow-md">
                        <svg class="me-2 h-12 w-12 shrink-0 p-2 text-secondary bg-secondary/10  rounded-full items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                          </svg>
                        <h3 class="mb-2 text-secondary text-xl font-bold "> الجودة أولاً </h3>
                        <p class="text-gray-500">أفضل جودة وفقاً للمعايير المناسبة لكل مشروع تجاري أو خدمي أو صناعي</p>
                    </div>

                    <div class="flex flex-col items-center bg-neutral-300/5 rounded-xl p-12 shadow-md">
                        <svg class="my-2 h-12 w-12 shrink-0 p-2 text-secondary bg-secondary/10 rounded-full items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                          </svg>
                    <h3 class="my-2 text-secondary text-xl font-bold"> سرعة التنفيذ والأداء </h3>
                    <p class="text-gray-500">جدول زمني سريع للمشاريع , بخطة تنفيذية وتنظيم دقيق للحصول على المخرجات بالجودة والسرعة المنشود</p>
                    </div>

                    <div class="flex flex-col items-center bg-neutral-300/5 rounded-xl p-12  shadow-md">
                        <svg class="me-2 h-12 w-12 shrink-0 p-2 text-secondary bg-secondary/10 rounded-full items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                          </svg>
                        <h3 class="my-2 text-secondary text-xl font-bold "> دعم فني مميز </h3>
                        <p class="text-gray-500">نقدم لك خدمات مابعد البيع ومراجعة العملاء الدائمين وتقديم العروض الخاصة لهم بشكل مميز ومستمر</p>
                    </div>


            </div>
            </div>
          </section>
    </div>


    <div ref={ref3} className={`transition-opacity ease-in delay-75 duration-1000  ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <div  class="px-8  mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-full justify-center hover:animate-fadeInUp">
            <div class="flex flex-col ">
             
             <div class="p-12">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
               <div>
                <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                  <span class="text-xs bg-secondary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Flowbite is out! See what's new</span> 
                  <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">
                  </path>
                </svg>
              </a>

                <p class="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> خدمات برمجية متكاملة </p>
                <p class="text-sm  mt-4 text-gray-700 text-balance">
                حول رؤيتك إلى واقع مع حلول البرمجيات من نوايا خير، أترك احتياجاتك بين أيدي خبيرة وتسلمها كاملة.

</p>
                <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                    <span class="text-gray-950 font-medium text-sm"> دراسة تجربة المستخدم </span> </div>
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                   <span class="text-gray-950 font-medium text-sm"> برمجة خاصة </span> </div>
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                   <span class="text-gray-950 font-medium text-sm"> واجهات مبهرة </span> </div>
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>    
                <span class="text-gray-950 font-medium text-sm"> دعم وأمان </span> </div>
                </div>
               </div>
               <div class=" h-full md:order-first"> 
                <img src="img/services/programming2.jpg" alt="#_" class=" rounded-2xl bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"/> </div>
              </div>

              <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
               <div> <span class="text-gray-600  uppercase text-xs font-medium "> سلمنا المشروع واستلم تسويق متكامل </span>
                <p class="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> خدمات متكاملة من التسويق الرقمي </p>
                <p class="text-sm  mt-4 text-gray-700 text-balance"> 
                قدم لكم استراتيجيات تسويق إلكتروني متكاملة لزيادة ظهورك الرقمي وتحقيق أهدافك التجارية. مع حلولنا التسويقية المبتكرة.                     </p>
                <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                  <span class="text-gray-950 font-medium text-sm"> دراسة السوق والمنافسين </span> </div>
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                 <span class="text-gray-950 font-medium text-sm"> خطط تسويقية </span> </div>
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                  <span class="text-gray-950 font-medium text-sm"> زيادة متابعين وتفاعلات </span> </div>
                 <div class="inline-flex items-center gap-2  text-xs text-gray-700"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                    <span class="text-gray-950 font-medium text-sm"> إعداد محتوى متميز </span> </div>
                </div>
               </div>
               <div class="h-full "> <img src="img/services/marketing.jpg" alt="#_" class="rounded-2xl bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"/> </div>
              </div>

              <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
                <div> <span class="text-gray-600  uppercase text-xs font-medium "> تصاميم مذهلة بانتظارك </span>
                 <p class="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> باقات متكاملة من التصميم الجرافيكي </p>
                 <p class="text-sm  mt-4 text-gray-700 text-balance"> 
                 تميز بأعمالك مع خدمات التصميم الابداعية لدينا والتي ستحول أفكارك إلى واقع ملموس                     </p>
                 <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                   <span class="text-gray-950 font-medium text-sm"> تصاميم إبداعية </span> </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                   <span class="text-gray-950 font-medium text-sm"> تناسق بصري </span> </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                    <span class="text-gray-950 font-medium text-sm"> تحيرك سلس </span> </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                   <span class="text-gray-950 font-medium text-sm"> جودة عالية </span> </div>
                 </div>
                </div>
                <div class="h-full md:order-first"> <img src="img/services/design2.jpg" alt="#_" class="rounded-2xl bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"/> </div>
               </div>
             </div> 

             
            </div>
           </div>
    </div>

<div  ref={ref4}  className={` bg-neutral-100 py-8 transition-opacity fadeUp delay-75 duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`} class="flex flex-col bg-neutral-100  m-auto p-auto">
<h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl font-body ">عملاؤنا وشركاء 
    <span class ="text-secondary"> النجاح </span>
</h2>

          <div
            class="flex overflow-x-scroll pb-10 hide-scroll-bar"
          >
            <div
              class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
            >
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
              <img src="img/clients/client1.jpeg" />
              </div>
              </div>
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                                  <img src="img/clients/client2.jpeg" />

                </div>
              </div>
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
              <img src="img/clients/client3.jpeg" />
              </div>
              </div>
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
              <img src="img/clients/client4.jpeg" />
              </div>
              </div>
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
              <img src="img/clients/client5.jpeg" />
              </div>
              </div>
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                 <img src="img/clients/client6.jpeg" />

                </div>
              </div>
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                 <img src="img/clients/client7.jpeg" />
                </div>
              </div>
              <div class="inline-block px-3">
                <div
                  class="w-40 h-40 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                                     <img src="img/clients/client8.jpeg" />
                </div>
              </div>
            </div>
          </div>
    </div>




<div  ref={ref5}  className={` bg-white transition-opacity fadeUp delay-75 duration-1000  text-black p-14 ${isVisible5 ? "opacity-100" : "opacity-0"  }`  } id="contact">
    <div class="mx-auto  max-w-screen-md font-body text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            نرحب
            <span class="text-secondary"> بتواصلك </span>
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl ">نحن نقدم حلولاً إلكترونية مبتكرة تتكامل بين التسويق الفعّال وبرمجة المواقع والتطبيقات بأعلى جودة واهتمام بالتفاصيل</p>
    </div>
     
<ContactForm/>

</div>


<div ref={ref6}  className={`mx-8  bg-secondary rounded-t-xl rounded-b-3xl flex flex-col items-center transition-opacity fadeUp delay-75 duration-1000  ${isVisible6 ? "opacity-100" : "opacity-0"}`} >
                
  <div class="py-4  px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 font-body">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
              مايجعلنا خيارك  
              <span class="text-white">  الأول  </span>
          </h2>
          <p class="mb-5 font-light text-gray-50 sm:text-xl ">نحن نقدم حلولاً إلكترونية مبتكرة تتكامل بين التسويق الفعّال وبرمجة المواقع والتطبيقات بأعلى جودة واهتمام بالتفاصيل</p>
      </div>
  </div>

</div>



  
 </div>
    
    )
}

export default Home;