import cloud from "../../assets/cloud-notif.png";
import wind from "../../assets/wind.png";
import drop from "../../assets/drop.png";
import sun from "../../assets/sun.png";

export default function WeatherDetails() {
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex justify-between items-center">
        <span>{"نیمه آفتابی"}</span>
        <span className="flex items-center gap-2">
          وضعیت هوا <img src={cloud} className="w-[30px]" />
        </span>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <span>{"6 کیلومتر بر ساعت"}</span>
        <span className="flex items-center gap-2">
          وزش باد <img src={wind} className="w-[30px]" />
        </span>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <span>{"20%"}</span>
        <span className="flex items-center gap-2">
          رطوبت <img src={drop} className="w-[30px]" />
        </span>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <span>{"بسیار زیاد"}</span>
        <span className="flex items-center gap-2">
          اشعه خورشید <img src={sun} className="w-[30px]" />
        </span>
      </div>
      <hr />
    </div>
  );
}
