import { Link } from "react-router-dom";

import { NavItem } from "@/components/ui/nav-item";
import { MobileNavbar } from "@/components/ui/mobile-navbar";
import { MobileNavItem } from "@/components/ui/mobile-nav-item";

export function Header() {
    return (
        <header>
            <div className="md:mt-4 container mx-auto">
                <div className="mx-2 md:mx-10 border-x   px-6">
                    <div className="flex justify-between items-center w-full py-4 border-b">
                        <div className="flex-1">
                            <Link to="/" className="flex items-center gap-3">
                                {/* <img src="src\assets\troll_icon.jpg" alt="jeje" width={50} height={50} /> */}
                                <span className="font-heading text-xl font-bold">Examen</span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-6 flex-1 justify-end md:flex">
                            <nav className="hidden md:flex items-center gap-10">
                                <NavItem href="/button" label="Button" />
                                <NavItem href="/counter" label="Counter" />
                                <NavItem href="/static-list" label="Static List" />
                                <NavItem href="/crud" label="Crud" />

                            </nav>
                        </div>
                        <MobileNavbar>
                            <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl mt-6">
                                <nav className="flex flex-col gap-1 pt-2">
                                    <MobileNavItem href="/button" label="Button" />
                                    <MobileNavItem href="/counter" label="Counter" />
                                    <MobileNavItem href="/static-list" label="Static List" />
                                    <MobileNavItem href="/crud" label="Crud" />
                                    
                                </nav>
                            </div>
                        </MobileNavbar>
                    </div>
                </div>
            </div>
        </header>
    );
}
