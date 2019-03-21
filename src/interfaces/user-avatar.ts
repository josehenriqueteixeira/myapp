export interface UserAvatar {    
    avatars: Array<Avatar>
    avatars_origin: AvatarOrigin
    first_name: string;
    gender: string;
    last_name: string;
}

export interface Avatar{
    height: number;
    size: string;
    url: string;
    width: number;
}

export interface AvatarOrigin {
    facebook_profile_link: string;
    id: number;
    name: string;
}
