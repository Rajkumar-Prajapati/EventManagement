
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
//   } from "@/components/ui/sheet"
  

// const MobileNav = () => {
//   return (
//     <nav className="md:hidden">
//     <Sheet>
//         <SheetTrigger>Open</SheetTrigger>
//          <SheetContent>
//           <SheetHeader>
//           <SheetTitle>Are you absolutely sure?</SheetTitle>
//           <SheetDescription>
//                This action cannot be undone. This will permanently delete your account
//               and remove your data from our servers.
//            </SheetDescription>
//          </SheetHeader>
//        </SheetContent>
//     </Sheet>

//     </nav>

//   )
// }

// export default MobileNav

import {
    Sheet,
    SheetContent,
    // SheetDescription,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger asChild className="align-middle">
          {/* Wrap the Open text in a styled button */}
          <Image 
          src="/assets/icons/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
         <Image 
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}
         />
         <Separator className="border border-gray-50"/>
           <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
