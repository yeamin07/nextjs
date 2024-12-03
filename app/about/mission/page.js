import Button from "@/app/components/Button"
import Yeamin from '@/public/images/yeamin.jpeg'
import Image from "next/image"

const Mission = () => {
  return (
    <main className="mt-10">

      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

      <div className="w-[400px]">
        <Image src={Yeamin} alt="Yeamin's Image" placeholder="blur"/>
      </div>

      <Button />

    </main>
  )
}

export default Mission