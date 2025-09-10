import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <>
            <div className="logo">
                <Link href="/">
                <Image 
                    src="/olymp_logo_dark.png" 
                    alt="Olymptrade" 
                    width={200} 
                    height={200} 
                    priority 
                />
                </Link>
            </div>
        </>
    )
}