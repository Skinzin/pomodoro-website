
interface AvatarProps {
    avatar: string;
}

export function Avatar({avatar}: AvatarProps) {
    return (
        <div className="w-16">
            <img className="rounded-full" src={avatar} alt="Avatar" />
        </div>
    )
}