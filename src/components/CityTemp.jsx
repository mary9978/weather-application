
function CityTemp() {
  return (
    <div className="flex flex-col justify-between"> 

    <div className="flex gap-1 justify-start h-max items-center">
            <img className="size-6 md:size-8 lg:size-11 inline-block dark:hidden" src="images/calendar.svg" loading="lazy" alt="calendar"/>
            <img className="size-6 md:size-8 lg:size-11 hidden dark:inline-block" src="images/calendarDark.png" loading="lazy" alt="calendar"/>
            <span className="leading-leading-08 text-base md:text-md lg:text-[1.75rem] text-lModeCinereous dark:text-white">دمای شهر های دیگر  </span>
    </div>

    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-[10px]  mt-3 text-lModeCinereous dark:text-white">
            <div className="flex items-center justify-around gap-x-3 rounded-lg w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px]  h-[88px] shadow-cardShadow border-2 border-lModeLightGray dark:border-lModeCinereous hover:border-lModPrimary">
                <span className="leading-leading-06 leading-leading-04 text-lModeCinereous dark:text-white">
                    مشهد
                </span>
                <span>
                    <img className="size-10 inline-block dark:hidden" src="images/cloud-notiffill.png" loading="lazy" alt="cloud"/>
                    <img className="size-10 hidden dark:inline-block" src="images/cloud-notifdark.png" loading="lazy" alt="cloud"/>
                </span>
                <span className="leading-leading-06 leading-leading-04 text-lModeSlate dark:text-white">
                    &#8451; 32
                </span>
            </div>

            <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lModeLightGray dark:border-lModeCinereous hover:border-lModPrimary">
                <span className="leading-leading-06 leading-leading-04 text-lModeCinereous dark:text-white">
                    اصفهان
                </span>
                <span>
                    <img className="size-10 inline-block dark:hidden" src="images/sunsmall.png" loading="lazy" alt="sun"/>
                    <img className="size-10 hidden dark:inline-block" src="images/cloud-notif.png" loading="lazy" alt="cloud"/>
                </span>
                <span className="leading-leading-06 leading-leading-04 text-lModeSlate dark:text-white">
                    &#8451; 36
                </span>
            </div>

            <div className="flex items-center justify-around gap-x-3 rounded-lg w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px]  h-[88px] shadow-cardShadow border-2 border-lModeLightGray dark:border-lModeCinereous hover:border-lModPrimary">
                <span className="leading-leading-06 leading-leading-04 text-lModeCinereous dark:text-white">
                    قم
                </span>
                <span>
                    <img className="size-10 inline-block dark:hidden" src="images/sunsmall.png" loading="lazy" alt="sun"/>
                    <img className="size-10 hidden dark:inline-block" src="images/cloud-notif.png" loading="lazy" alt="cloud"/>
                </span>
                <span className="leading-leading-06 leading-leading-04 text-lModeSlate dark:text-white">
                    &#8451; 39
                </span>
            </div>


            <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lModeLightGray dark:border-lModeCinereous hover:border-lModPrimary">
                <span className="leading-leading-06 leading-leading-04 text-lModeCinereous dark:text-white">
                    کرج
                </span>
                <span>
                    <img className="size-10 inline-block dark:hidden" src="images/cloud-notiflight.png" loading="lazy" alt="cloud"/>
                    <img className="size-10 hidden dark:inline-block" src="images/cloud-notif.png" loading="lazy" alt="cloud"/>
                </span>
                <span className="leading-leading-06 leading-leading-04 text-lModeSlate dark:text-white">
                    &#8451; 29
                </span>
            </div>

        
    </div> 
</div> 
  )
}

export default CityTemp