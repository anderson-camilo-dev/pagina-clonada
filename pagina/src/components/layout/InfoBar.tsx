import Image from "next/image";

export function InfoBar() {
  return (
    <div className="w-full py-2 bg-white border-[1px]  border-black/20">
      <div className="bg-white  w-full mx-auto flex items-center justify-end max-w-7xl h-[24px] my-auto ">
        <div className="max-h-[20px] flex items-center gap-[5px] ">
          <img className="h-4 w-auto"
            src="https://images.icon-icons.com/1995/PNG/512/facebook_internet_media_network_social_icon_123257.png"
            alt="face"
          />
          <img className="h-4 w-auto"
            src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_icon_256077.png"
            alt="X"
          />
          <img className="h-4 w-auto"
          src="https://images.icon-icons.com/793/PNG/512/instagram_icon-icons.com_65586.png"alt="insta"/>
          
          <img className="h-4 w-auto"
            src="https://images.icon-icons.com/693/PNG/512/Pinterest_Rounded_Solid_icon-icons.com_61557.png"
            alt="pinteres"
          />
          <img className="h-4 w-auto"
            src="https://images.icon-icons.com/791/PNG/512/YOUTUBE_icon-icons.com_65487.png"
            alt="youtube"
          />
          <img className="h-4 w-auto"
            src="https://images.icon-icons.com/2973/PNG/512/tiktok_logo_icon_186928.png"
            alt="tiktok"
          />
        </div>
      </div>
    </div>
  );
}
