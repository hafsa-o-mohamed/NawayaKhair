import { Link } from "react-router-dom";
const Programming = () =>{
    return(
        <div>
    {/* <!--#navbar-->  */}

{/* <!--hero--> */}

<div>
    <section class="bg-white">
        <div class="grid max-w-screen-xl h-screen py-8 px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 font-body text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl "> حلول متكاملة 
                   <span class="text-secondary "> للبرمجيات </span>
                </h1>
                <p class="max-w-2xl mb-6 font-body font-light text-balance text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                حول رؤيتك إلى واقع مع حلول البرمجيات من نوايا خير، نقدم لك واجهة إلكترونية لأعمالك التجارية، وتطبيقات استثنائية تسهل أعمالك، أترك احتياجاتك بين أيدي خبيرة وتسلمها كاملة.  
                </p>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg border-gray-700 bg-secondary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                    اطلب الخدمة
                </a>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                    تواصل معنا
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
                                                   
                        <p>دعم 24\7</p>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-secondary size-4">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                          </svg>                            
                        <p>تطوير مستمر</p>
                    </div>

                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <section class=" py-8 antialiased  md:py-16">
                    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">           
                      <div class="flex flex-wrap gap-4 ">
                        <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                          <svg class="me-2 h-4 w-4 shrink-0 text-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                          </svg>
                          <span class="text-sm font-medium text-gray-900 align-middles ">تطوير التطبيقات </span>
                        </a>
                        <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-yellow-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">خطط تسويقية</span>
                          </a>

                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">SEO</span>
                          </a>

                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-violet-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">تصاميم جرافيكية</span>
                          </a>

                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-lime-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">UX/UI</span>
                          </a>

                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">كتابة محتوى</span>
                          </a>

                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">متاجر إلكترونية</span>
                          </a>

                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">حملات إعلانية</span>
                          </a>




                        
                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                            <svg class="me-2 h-4 w-4 shrink-0 text-lime-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                            </svg>
                            <span class="text-sm font-medium text-gray-900 align-middles ">UX/UI</span>
                          </a>

                          <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                              <svg class="me-2 h-4 w-4 shrink-0 text-yellow-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                              </svg>
                              <span class="text-sm font-medium text-gray-900 align-middles ">خطط تسويقية</span>
                            </a>

                            <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                              <svg class="me-2 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                              </svg>
                              <span class="text-sm font-medium text-gray-900 align-middles ">SEO</span>
                            </a>

                            <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                              <svg class="me-2 h-4 w-4 shrink-0 text-violet-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                              </svg>
                              <span class="text-sm font-medium text-gray-900 align-middles ">تصاميم جرافيكية</span>
                            </a>

                            <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                              <svg class="me-2 h-4 w-4 shrink-0 text-lime-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                              </svg>
                              <span class="text-sm font-medium text-gray-900 align-middles ">UX/UI</span>
                            </a>

                            <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                              <svg class="me-2 h-4 w-4 shrink-0 text-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                              </svg>
                              <span class="text-sm font-medium text-gray-900 align-middles ">كتابة محتوى</span>
                            </a>

                            <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                              <svg class="me-2 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                              </svg>
                              <span class="text-sm font-medium text-gray-900 align-middles ">متاجر إلكترونية</span>
                            </a>

                            <a href="#" class="flex  items-center rounded-2xl border w-fit border-gray-200 bg-white px-4 py-2 hover:bg-gray-50">
                              <svg class="me-2 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                              </svg>
                              <span class="text-sm font-medium text-gray-900 align-middles ">حملات إعلانية</span>
                            </a>

                      </div>
                    </div>
                  </section>
            </div>                
        </div>
    </section>
</div>

<div class="bg-neutral-100 py-16 font-body">
<section>
<div class="grid grid-cols-2 mx-8">
<div class="px-4">
    <div class="h-full md:order-first"> 
        <img src="img/services/programming.jpg" alt="#_" class="rounded-xl bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"/>
         </div>

</div>
<div class="">
    <div class=" px-4">
        <div class="w-full  px-4">
           <div
              class="
              p-10
              md:px-7
              xl:px-10
              rounded-[20px]
              bg-white
              shadow-md
              hover:shadow-lg
              mb-8
              "
              >
              <div
                 class="
                 w-[70px]
                 h-[70px]
                 flex
                 items-center
                 justify-center
                 bg-secondary
                 rounded-2xl
                 mb-8
                 "
                 >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="stroke-white size-12 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>

              </div>
              <h4 class="font-semibold text-xl text-dark mb-3">
                 تطوير المواقع 
              </h4>
              <p class="text-body-color">
              نقدم خدمة تطوير مواقع ويب متكاملة، مصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك الرقمية. بفضل فريقنا المحترف، نضمن لك موقعًا مبتكرًا وسهل الاستخدام، يعزز تواجدك على الإنترنت ويجذب عملاء جدد
              </p>
           </div>
        </div>
        <div class="w-full  px-4">
           <div
              class="
              p-10
              md:px-7
              xl:px-10
              rounded-[20px]
              bg-white
              shadow-md
              hover:shadow-lg
              mb-8
              "
              >
                              <div
                 class="
                 w-[70px]
                 h-[70px]
                 flex
                 items-center
                 justify-center
                 bg-secondary
                 rounded-2xl
                 mb-8
                 "
                 >
                 <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                       d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z"
                       fill="white"
                       />
                    <path
                       d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z"
                       fill="white"
                       />
                    <path
                       d="M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z"
                       fill="white"
                       />
                    <path
                       d="M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z"
                       fill="white"
                       />
                 </svg>

              </div>
              <h4 class="font-semibold text-xl text-dark mb-3">
                تطوير التطبيقات
              </h4>
              <p class="text-body-color">
              نطور تطبيقات مخصصة ومتناسبة مع رؤيتك واحتياجاتك، مع التركيز على الأداء العالي وتجربة المستخدم الممتازة. اجعل تطبيقك يتألق في السوق مع حلولنا التقنية المتطورة وفريقنا الخبير.
              </p>
           </div>
        </div>
        <div class="w-full  px-4">
           <div
              class="
              p-10
              md:px-7
              xl:px-10
              rounded-[20px]
              bg-white
              shadow-md
              hover:shadow-lg
              mb-8
              "
              >

<div
                 class="
                 w-[70px]
                 h-[70px]
                 flex
                 items-center
                 justify-center
                 bg-secondary
                 rounded-2xl
                 mb-8
                 "
                 >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="stroke-white size-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>

              </div>
              <h4 class="font-semibold text-xl text-dark mb-3">
                تطوير المتاجر
              </h4>
              <p class="text-body-color">
              خدمة تطوير متاجر إلكترونية مبتكرة من نوايا خير تتيح لك إدارة منتجاتك ومبيعاتك بفعالية وسهولة. مع تصميم جذاب وتجربة تسوق سلسة، نساعدك على تعزيز نجاح عملك الرقمي وزيادة عائداتك.
              </p>
           </div>
        </div>

     </div>
</div>
</div>
</section>
</div>

{/* <!--packages--> */}
    <div>
      <section class="bg-white dark:bg-gray-900 font-body">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">تفاصيل الخدمات البرمجية</h2>
                <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">أختر احتياجاتك من بين خدماتنا التقنية والبرمجية المتنوعة وتواصل معنا لتحصل على عرض سعر خاص</p>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {/* <!-- Pricing Card --> */}
                <div class="flex flex-col shadow-md p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold text-secondary">برمجة مواقع الويب</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">معك خطوة بخطوة من الرؤية الأولية إلى مابعد التنفيذ الناجح</p>

                    {/* <!-- List --> */}
                    <ul role="list" class=" my-8 mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تواجد رسمي</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>دوماين واستضافة</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تصميم  UX/UI </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>برمجة خاصة </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>توافق مع جميع الشاشات </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>حماية ودعم فني</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تهيئة محركات البحث SEO </span>
                        </li>
                    </ul>
                    <a href="#" class="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center">احصل على عرض سعر </a>
                </div>
                {/* <!-- Pricing Card --> */}
                <div class="flex flex-col shadow-md p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold text-secondary">برمجة التطبيقات</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">ندرس نموذج العمل المقدم لنقدم بين يديك تطبيقاً ناجحاً وملبياً لاحتياجات عملائك</p>

                    {/* <!-- List --> */}
                    <ul role="list" class="my-8 mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تواجد على متاجر الهواتف</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>دراسة رحلة العميل</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تصميم UX/UI</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>برمجة خاصة</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>ربط مع بروتوكولات خارجية</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>حماية ودعم فني</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>اجراء الاختبارات</span>
                        </li>
                    </ul>
                    <a href="#" class="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center">احصل على عرض سعر </a>
                </div>
                {/* <!-- Pricing Card --> */}
                <div class="flex flex-col shadow-md p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold text-secondary">انشاء المتاجر الإلكترونية</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">ندرس نموذج العمل المقدم لنقدم بين يديك تطبيقاً ناجحاً وملبياً لاحتياجات عملائك</p>

                    {/* <!-- List --> */}
                    <ul role="list" class=" my-8 mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تواجد رسمي</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>دوماين واستضافة</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تصميم  UX/UI </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>إضافة جميع المنتجات</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>توافق مع جميع الشاشات </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>حماية ودعم فني</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            {/* <!-- Icon --> */}
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>تهيئة محركات البحث SEO </span>
                        </li>
                    </ul>
                    <a href="#" class="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center">احصل على عرض سعر </a>
                </div>
            </div>
        </div>
      </section>
    </div>




    <div class="mx-8  bg-secondary rounded-t-xl rounded-b-3xl flex flex-col items-center">
                
                <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6 font-body">
                    <div class="mx-auto max-w-screen-md text-center lg:mb-12">
                        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white">
                          تحتاج من ينفذ لك خدمة رقمية؟
                        </h2>
                        <p class="mb-5 font-light text-gray-50 sm:text-xl ">زودنا باحتياجاتك، رؤاك، وأهدافك ، وسنعمل معك على تحقيقها وتحويلها إلى واقع ملموس</p>
                        <a href="#" class="text-secondary bg-white hover:bg-neutral-50 focus:ring-4 focus:bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center"> تواصل معنا </a>
        
                    </div>
        
                </div>
        
        </div>

  
        </div>
    )
}
export default Programming;