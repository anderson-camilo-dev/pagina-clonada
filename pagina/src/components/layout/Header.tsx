import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";
import { InfoBar } from "./InfoBar";
//import { BarEnd } from "./BarEnd";

export function Header() {
  return (
    <header>
      <TopBar />
      <InfoBar />
      <MainNav />
      
    </header>
  );
}
