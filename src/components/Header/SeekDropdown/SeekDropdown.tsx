import React from 'react';

const SeekDropdown = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <>
            {isOpen && (
                <div className="absolute top-11 right-0 w-32 bg-slate-900 p-4">
                    <ul className="flex cursor-pointer flex-col gap-3 text-center">
                        <li>Char 1</li>
                        <li>Char 2</li>
                        <li>Char 3</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default SeekDropdown;
