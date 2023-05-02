import { ArrowUpward } from '@mui/icons-material';
import { Zoom } from '@mui/material';
import { useEffect, useState } from 'react';

export default function BackToTop(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <div 
            className="back-up"
        >
            <Zoom className="clear-block" in={scrollPosition > props.start ? true : false}>
                <div>
                    <a className="row-between" href={`${window.location.origin}${window.location.pathname}#nav-bar`}>
                        <span>Back To Top</span>
                        <ArrowUpward />
                    </a>
                </div>
            </Zoom>
        </div>
    )
}