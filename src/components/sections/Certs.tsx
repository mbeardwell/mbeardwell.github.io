import IconCert from "@icons/cert.svg?react";
import Section from "@components/Section";
import { useReveal } from "@hooks/useReveal";
import { JSX } from "react";

type CertStatus = "done" | "progress";

interface CertProps {
	issuer: string;
	name: string;
	dateIssued: string;
	status: CertStatus;
	certFile?: string;
}

const CERTS: CertProps[] = [
	{
		issuer: "TryHackMe",
		name: "Pre-Security",
		dateIssued: "Apr 2022",
		status: "done",
		certFile: "thm-pre-security",
	},
	{
		issuer: "The King's Trust",
		name: "TEAM Programme",
		dateIssued: "Apr 2024",
		status: "done",
		certFile: "team-programme",
	},
	{
		issuer: "Security Blue Team",
		name: "Intro to OSINT",
		dateIssued: "Jun 2025",
		status: "done",
		certFile: "sec-blue-team-intro-osint",
	},
	{
		issuer: "CompTIA",
		name: "Security+ (SY0-701)",
		dateIssued: "",
		status: "progress",
	},
];

const TL = [
	{ label: "TryHackMe Pre-Security", date: "Apr 2022", status: "done" },
	{ label: "King's Trust TEAM Programme", date: "Apr 2024", status: "done" },
	{
		label: "Security Blue Team Intro to OSINT",
		date: "Jun 2025",
		status: "done",
	},
	{ label: "CompTIA Security+", date: "In Progress", status: "progress" },
];

function dotColor(status: string) {
	return status === "done" ? "var(--green)" : "var(--amber)";
}

function Timeline() {
	const r = useReveal();
	return (
		<div ref={r} className="relative mb-14">
			<div className="absolute top-[6px] left-[12.5%] right-[12.5%] h-px bg-[var(--bd)]" />
			<div
				className="absolute top-[6px] left-[12.5%] h-px bg-[var(--green)]"
				style={{ width: "calc(75% * 0.87)" }}
			/>
			<div className="flex justify-around">
				{TL.map((item) => (
					<div
						key={item.label}
						className="flex flex-col items-center gap-2.5 flex-1"
					>
						<div
							className="w-[13px] h-[13px] rounded-full relative z-10 flex-shrink-0 transition-transform duration-200 hover:scale-[1.3]"
							style={{
								background: dotColor(item.status),
								border: `2px solid ${dotColor(item.status)}`,
								boxShadow: `0 0 10px ${dotColor(item.status)}`,
							}}
						/>
						<div className="text-center max-w-[110px]">
							<div
								className="text-[10px] tracking-[0.06em] font-medium mb-1"
								style={{ color: dotColor(item.status) }}
							>
								{item.date}
							</div>
							<div className="text-[11px] text-[var(--mu)] leading-[1.35]">
								{item.label}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function StatusDot({ status }: { status: CertStatus }) {
	return (
		<span
			className="inline-block w-[7px] h-[7px] rounded-full flex-shrink-0"
			style={{
				background: dotColor(status),
				boxShadow: `0 0 6px ${dotColor(status)}`,
			}}
		/>
	);
}

function Cert({ issuer, name, dateIssued, status, certFile }: CertProps) {
	const r = useReveal();
	const inner = (
		<div className="border border-[var(--bd)] hover:border-[var(--bdH)] transition-all duration-[220ms] hover:-translate-y-[2px] hover:shadow-[0_12px_36px_color-mix(in_srgb,var(--ac)_8%,transparent)] flex flex-col overflow-hidden h-full">
			<div className="relative overflow-hidden h-[90px] flex-shrink-0">
				{certFile ? (
					<>
						<img
							src={`./images/certs/${certFile}.png`}
							alt={name}
							className="w-full h-full object-cover object-top transition-transform duration-[400ms] brightness-[0.85] hover:brightness-100 hover:scale-[1.04]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
					</>
				) : (
					<div
						className="w-full h-full flex items-center justify-center"
						style={{
							background:
								"linear-gradient(135deg, color-mix(in srgb, var(--amber) 12%, var(--surface)), color-mix(in srgb, var(--ac) 8%, var(--surface)))",
						}}
					>
						<IconCert
							className="w-10 h-10 opacity-20"
							style={{ color: "var(--amber)" }}
						/>
					</div>
				)}
			</div>
			<div className="flex flex-col gap-1.5 p-5 flex-1">
				<div className="flex justify-between items-center gap-2 mb-1 min-w-0">
					<div className="flex items-center gap-1.5 min-w-0">
						<StatusDot status={status} />
						<span className="text-[9px] tracking-[0.14em] uppercase text-[var(--mu)] truncate whitespace-nowrap">
							{issuer}
						</span>
					</div>
					<span
						className="text-[9px] tracking-[0.1em] uppercase font-semibold flex-shrink-0"
						style={{ color: dotColor(status) }}
					>
						{status === "done" ? "Achieved" : "In Progress"}
					</span>
				</div>
				<p className="font-serif font-normal text-[16px] text-content leading-[1.3]">
					{name}
				</p>
				<p className="text-[11px] text-[var(--mu)] mt-auto pt-2">
					{dateIssued}
				</p>
			</div>
		</div>
	);

	return certFile ? (
		<a
			ref={r}
			href={`./docs/certs/${certFile}.pdf`}
			target="_blank"
			rel="noopener noreferrer"
			className="no-underline text-inherit block h-full"
		>
			{inner}
		</a>
	) : (
		<div ref={r} className="h-full">
			{inner}
		</div>
	);
}

export default function Certs(): JSX.Element {
	const r = useReveal();
	return (
		<Section id="certs">
			<div className="flex flex-col gap-10">
				<p
					ref={r}
					className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent"
				>
					Certifications
				</p>
				<Timeline />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{CERTS.map((c) => (
						<Cert key={c.name} {...c} />
					))}
				</div>
			</div>
		</Section>
	);
}
