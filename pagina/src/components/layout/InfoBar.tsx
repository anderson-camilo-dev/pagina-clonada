import Link from "next/link";

export function InfoBar() {
  return (
    <div className="w-full py-2 bg-white border-[1px] border-black/20">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center sm:justify-end">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Link href="https://www.facebook.com/index.php/">
            <img
              className="h-4 sm:h-5 md:h-6 w-auto transition transform duration-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/50"
              src="https://images.icon-icons.com/1995/PNG/512/facebook_internet_media_network_social_icon_123257.png"
              alt="Facebook"
            />
          </Link>
          <Link href="https://x.com/X.">
            <img
              className="h-4 sm:h-5 md:h-6 w-auto transition transform duration-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/50"
              src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_icon_256077.png"
              alt="X"
            />
          </Link>
          <Link href="https://www.instagram.com/">
            <img
              className="h-4 sm:h-5 md:h-6 w-auto transition transform duration-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/50"
              src="https://images.icon-icons.com/791/PNG/512/instagram_f_icon-icons.com_65485.png"
              alt="Instagram"
            />
          </Link>
          <Link href="https://br.pinterest.com/">
            <img
              className="h-4 sm:h-5 md:h-6 w-auto transition transform duration-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/50"
              src="https://images.icon-icons.com/693/PNG/512/Pinterest_Rounded_Solid_icon-icons.com_61557.png"
              alt="Pinterest"
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <img
              className="h-4 sm:h-5 md:h-6 w-auto transition transform duration-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/50"
              src="https://images.icon-icons.com/791/PNG/512/YOUTUBE_icon-icons.com_65487.png"
              alt="YouTube"
            />
          </Link>
          <Link href="https://www.tiktok.com/login">
            <img
              className="h-4 sm:h-5 md:h-6 w-auto transition transform duration-150 hover:-translate-y-1 hover:scale-110 hover:bg-black/50"
              src="https://images.icon-icons.com/2973/PNG/512/tiktok_logo_icon_186928.png"
              alt="TikTok"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
