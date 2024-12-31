import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function HeaderMain() {
    return (
        <header className="fixed inset-x-0 z-50 w-full">
            <HeaderMobile />
            <HeaderDesktop />
        </header>
    )
}