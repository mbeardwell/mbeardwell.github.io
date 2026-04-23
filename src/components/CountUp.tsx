import { useEffect, useRef, useState } from "react";

interface CountUpProps {
	to: number;
	prefix?: string;
	suffix?: string;
}

export default function CountUp({
	to,
	prefix = "",
	suffix = "",
}: CountUpProps) {
	const [val, setVal] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const raf = useRef<number | null>(null);

	useEffect(() => {
		const obs = new IntersectionObserver(
			([entry]) => {
				if (raf.current) cancelAnimationFrame(raf.current);
				if (entry.isIntersecting) {
					const t0 = Date.now();
					const tick = () => {
						const p = Math.min(1, (Date.now() - t0) / 1100);
						setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
						if (p < 1) raf.current = requestAnimationFrame(tick);
					};
					raf.current = requestAnimationFrame(tick);
				} else {
					setVal(0);
				}
			},
			{ threshold: 0.5 },
		);

		if (ref.current) obs.observe(ref.current);
		return () => {
			obs.disconnect();
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, [to]);

	return (
		<span ref={ref}>
			{prefix}
			{val}
			{suffix}
		</span>
	);
}
