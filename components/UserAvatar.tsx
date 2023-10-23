import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

type UserAvatarProps = {
  name: string | null | undefined;
  image: string | null | undefined;
  className?: string;
};

function UserAvatar({ name, image, className }: UserAvatarProps) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={name || "User Name"}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarFallback
        className="dark:bg-white dark:text-black text-lg"
        delayMs={1000}
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
