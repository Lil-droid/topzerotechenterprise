import React, { FC } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface BreadcrumbProps {
    links: { href: string; text: string }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
    const lastIndex = links.length - 1;
    return (
        <div className="flex items-center flex-wrap justify-center gap-1.5">
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    {index !== lastIndex ? (
                        <>
                            <Link
                                href={link.href}
                                className="text-black/50 dark:text-white/50 hover:text-primary text-sm font-medium duration-300"
                            >
                                {link.text}
                            </Link>
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                width="14"
                                height="14"
                                className="text-black/30 dark:text-white/30"
                            />
                        </>
                    ) : (
                        <span className="text-primary text-sm font-semibold">{link.text}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;