"use client";

import * as React from "react";
import Link from "next/link";
import ModeToggle from "@/components/Toggle";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Mobile from "../Mobile";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Book Now",
    href: "/book",
    description:
      "please make sure to read all the content to understand how booking works",
  },
  {
    title: "galley",
    href: "/gallery",
    description: "quick preview of our clients having fun during there camp",
  },
];

export function Head() {
  return (
    <>
    <Mobile/>
      <div className="hidden md:flex p-5 bg-gray-100  justify-evenly content-center h-[120px] items-center dark:bg-gray-800 dark:text-white  relative z-40">
        <Link href="/">
          <Image
            src={"/luxelogo.png"}
            height={200}
            width={200}
            alt="logo"
            className=" object-cover"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-gray-100 dark:bg-slate-900 font-semibold">
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/tours">
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          TOURS
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out our tours
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about" title="About Us">
                    about us
                  </ListItem>
                  <ListItem href="/contact" title="Contact Us">
                    how to get in touch with us
                  </ListItem>
                  <ListItem href="/overview" title="OverView">
                    what we do / everything you need to know
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-gray-100 dark:bg-slate-700 font-semibold">
                OUR TOURS
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/">
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 w-full text-center ">
                          Marrakech
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="OURIKA">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="SAHARA">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="OURZAZAT">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-slate-700 bg-gray-100 font-semibold">
                gallery
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
