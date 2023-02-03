import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavBar = () => {
    const router = useRouter();
    return (
        <>
            <nav>
                <Link legacyBehavior href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>
                        Home
                    </a>
                </Link>
                <Link legacyBehavior href="/person">
                    <a
                        className={
                            router.pathname === "/person" ? "active" : ""
                        }
                    >
                        Detail
                    </a>
                </Link>
            </nav>
            <style jsx>{`
                .active {
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default NavBar;
