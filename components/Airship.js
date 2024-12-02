// components/Airship.js
import Image from 'next/image';

export default function Airship() {
    return (
        <div className="airship-container absolute -top-12">
            <Image
                src="/images/airship.svg"
                alt="Current position"
                width={180}
                height={65}
                className="airship"
            />
        </div>
    );
}