// pages/index.js
import { useEffect, useState } from 'react';
import RoadmapStep from '../src/components/RoadmapStep';
import { steps } from '../utils/steps';
import GradientText from '../src/components/GradientText';

export default function Roadmap() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col ">
            <main className="flex-grow flex flex-col justify-end py-10">
                <GradientText size="7xl" className={'mx-auto'}>CSP MFE Roadmap</GradientText>
                <p className="text-neutral-100 max-w-xl text-center mx-auto mt-10">
                    This roadmap outlines our approach to transforming our application into a Micro Frontend (MFE) architecture.
                    <br /><br />
                    Click on individual steps to explore detailed information about technical requirements, challenges, and implementation guidelines.
                </p>
                <div
                    id="mountain"
                    className="relative w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/landscape.png')",
                        paddingTop: "50%", // This creates a 2:1 aspect ratio (2500:1250)
                    }}
                >
                    <div className="absolute inset-0">
                        {steps.map((step, index) => (
                            <RoadmapStep
                                key={index}
                                title={step.title}
                                passed={step.passed}
                                current={step.current}
                                index={index}
                                left={step.left}
                                bottom={step.bottom}
                                mdContent={step.mdContent}
                                when={step.when}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}