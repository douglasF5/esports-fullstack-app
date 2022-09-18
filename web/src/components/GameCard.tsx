interface GameCardProps {
    data: {
        bannerUrl: string;
        title: string;
        adsCount: number;
    };
}

export function GameCard({ data }: GameCardProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src={data.bannerUrl} alt="" />
            <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-cover-fade">
                <strong className="font-bold text-white block">{data.title}</strong>
                <span className="mt-1 text-zinc-300 text-sm block">{`${data.adsCount} anúncio${data.adsCount !== 1 ? 's' : ''}`}</span>
            </div>
        </a>
    );
}