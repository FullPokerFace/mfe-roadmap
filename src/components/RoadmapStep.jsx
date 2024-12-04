// RoadmapStep.js
import { useState } from 'react';
import RoadmapDialog from './RoadmapDialog';
import Airship from './Airship';

export default function RoadmapStep({ title, mdContent, index, left, bottom, current, passed, when }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div
                className="absolute flex flex-col items-center gap-2 transform 
                         transition-all duration-200 ease-in-out 
                         hover:scale-105 cursor-pointer mountain-step p-2 rounded-lg hover:bg-sky-800"
                style={{
                    left: `${left}%`,
                    bottom: `${bottom}%`,
                }}
                onClick={() => setIsDialogOpen(true)}
            >
                {current && <Airship />}
                <div className="flex flex-col items-center gap-2">


                    <div className={`w-4 h-4 rounded-full border-2 relative
                                ${passed
                            ? 'border-green-500 bg-green-500'
                            : 'border-amber-500 bg-transparent'}
                                transition-colors duration-200`}>
                        {passed && (
                            <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                                ✓
                            </span>
                        )}
                    </div>
                    <h3 className="text-sm font-bold text-white bg-orange-600 rounded-md px-3 py-1 text-center">
                        {when || 'TBD'}
                    </h3>
                    <h3 className="text-sm font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] max-w-[90px] text-center">
                        {title}
                    </h3>
                </div>
            </div>

            {isDialogOpen && (
                <RoadmapDialog
                    mdContent={mdContent}
                    onClose={() => setIsDialogOpen(false)}
                />
            )}
        </>
    );
}