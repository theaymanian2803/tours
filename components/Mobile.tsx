import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function Mobile() {
  return (
    <div className="absolute bg-gradient-to-r from-red-400 via-pink-900 to-blue-900 bac rounded-full w-10 h-10 text-center left-3 text-white p-1 mt-5 md:hidden">
      <Sheet>
        <SheetTrigger className=" mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link href="/">Home</Link>
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-8 capitalize font-bold mt-8">
                <Link href="/tours">Our Tours</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/book">Book Now</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Mobile;
