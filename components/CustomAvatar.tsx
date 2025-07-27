// components/CustomAvatar.tsx
import React from 'react';
import Image from 'next/image';
import { CustomAvatarProps } from '@/types/Landingtypes';

const CustomAvatar: React.FC<CustomAvatarProps> = ({ src, alt = 'Avatar', size = 80 }) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className="rounded-full object-cover shadow-md"
  />
);

export default CustomAvatar;