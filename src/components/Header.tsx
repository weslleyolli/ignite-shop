import Image from "next/image"
import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header className="px-8 py-0 w-full max-w-[1100px] mx-auto my-0">
            <Image src={logo} alt="Logo ignite shop" />
        </header>
    )
}