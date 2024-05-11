import Image from "next/image";

export default function Logo() {
  return (
    <div>
        <Image src="/assets/images/logo.svg" alt="Logo" width={220} height={40}/>
    </div>
  );
  
}