import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"} className="overflow-hidden" prefetch={false}>
      <div className="flex items-center">
        {/* <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image src={""} alt={"logo"} className="dark:filter dark:invert" />
        </AspectRatio> */}
        <h1 className="dark:text-white text-2xl font-bold">Chat With Anyone</h1>
      </div>
    </Link>
  );
}

export default Logo;
