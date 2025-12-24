import Image from "next/image";
import Link from "next/link";

export function InfoBar() {
  return (
    <div className="w-full py-2 bg-white border-[1px]  border-black/20">
      <div className="bg-white  w-full mx-auto flex items-center justify-end max-w-7xl h-[24px] my-auto ">
        <div className="max-h-[20px] flex items-center gap-[5px] ">
          <Link  href="https://www.facebook.com/index.php/">
          <img
            className="h-4 w-auto transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-black/50"
            src="https://images.icon-icons.com/1995/PNG/512/facebook_internet_media_network_social_icon_123257.png"
            alt="face"
          /> </Link>
          <Link  href="https://x.com/X." >
          <img
            className="h-4 w-auto transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-black/50 "
            src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_icon_256077.png"
            alt="X"
          /></Link>
          <Link  href="https://www.instagram.com/" >
          <img
            className="h-4 w-auto transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-black/50 "
            src="https://images.icon-icons.com/791/PNG/512/instagram_f_icon-icons.com_65485.png"
            alt="insta"
          /></Link>
          <Link  href="https://br.pinterest.com/" >
          <img
            className="h-4 w-auto transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-black/50 "
            src="https://images.icon-icons.com/693/PNG/512/Pinterest_Rounded_Solid_icon-icons.com_61557.png"
            alt="pintere
            s"
          /></Link>
          <Link  href="https://www.youtube.com/" >
          <img
            className="h-4 w-auto transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-black/50 "
            src="https://images.icon-icons.com/791/PNG/512/YOUTUBE_icon-icons.com_65487.png"
            alt="youtube
            "
          /></Link>
          <Link  href="https://www.tiktok.com/login" >
          <img
            className="h-4 w-auto transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-black/50 "
            src="https://images.icon-icons.com/2973/PNG/512/tiktok_logo_icon_186928.png"
            alt="tiktok"
          /></Link>
        </div>
      </div>
    </div>
  );
}
