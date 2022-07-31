import React, { useState } from 'react';
import SeekDropdown from './SeekDropdown';
import Timer from './Timer';

const Header = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <header className="sticky top-0 w-full bg-slate-900">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Timer />
                <h1 className="text-xl text-white sm:text-2xl md:text-3xl">
                    Iconic Character Seeker
                </h1>
                <div className="relative text-white">
                    <button
                        onClick={() =>
                            setIsDropDownOpen((prevState) => !prevState)
                        }
                    >
                        <span>Seek us</span>
                    </button>
                    <SeekDropdown isOpen={isDropDownOpen} />
                </div>
            </div>
        </header>
    );
};

export default Header;
