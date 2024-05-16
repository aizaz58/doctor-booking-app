import DoctorsList from "@/components/DoctorsList";
import Brands from "@/components/frontend/Brands";
import Hero from "@/components/frontend/Hero";
import { MegaMenu } from "@/components/frontend/MegaMenu";
import TabbedSection from "@/components/frontend/TabbedSection";


export default function Home() {
  return (
    <main className="">
    
<Hero/>
<Brands/>
      <TabbedSection/>
      <DoctorsList title="TeleHealth Visit" isInPerson={false} className="bg-pink-100 py-8 lg:py-24"/>
      <DoctorsList title="In-person doctor visit" isInPerson={true} className=" bg-white py-8 lg:py-24"/>
    </main>
  );
}
