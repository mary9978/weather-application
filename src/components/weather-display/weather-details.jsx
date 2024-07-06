import cloud from "../../assets/cloud-notif.png";
import wind from "../../assets/wind.png";
import drop from "../../assets/drop.png";
import sun from "../../assets/sun.png";

export default function WeatherDetails() {
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <img src={cloud} className="w-[30px]" />
          وضعیت هوا
        </span>
        <span>{"نیمه آفتابی"}</span>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <img src={wind} className="w-[30px]" />
          وزش باد
        </span>
        <span>{"6 کیلومتر بر ساعت"}</span>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <img src={drop} className="w-[30px]" />
          رطوبت
        </span>
        <span>{"20%"}</span>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <img src={sun} className="w-[30px]" />
          اشعه خورشید
        </span>
        <span>{"بسیار زیاد"}</span>
      </div>
      <hr />
    </div>
  );
}
