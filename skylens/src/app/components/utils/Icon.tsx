import React, { SVGProps } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

export default function Icon({ name, ...props }: IconProps) {
    const iconPath = `/assets/svg/${name}.svg` as SVGProps<SVGSVGElement>['href'];

    return (
        <svg {...props}>
            <use href={iconPath} />
        </svg>
    );
}
