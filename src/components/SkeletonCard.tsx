import clsx from "clsx";

export default function SkeletonCard({ isLoading }: {isLoading?: boolean }) {
    return (
        <div className={clsx(
            'flex flex-col shadow-lg h-96 bg-gray-100 p-5 text-gray-300 w-80',
            {
                'relative overflow-hidden before:absolute:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite]':
                isLoading,
            }
        )}>
            <div className="flex relative h-72 flex-1 bg-gray-200"></div>
            <div className="flex justify-between font-bold my-3 bg-gray-200"></div>
            <div className="h-3 w-8/12 rounded-md bg-gray-200"></div>
        </div>
    )
}
