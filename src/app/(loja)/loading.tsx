import SkeletonCard from "@/components/SkeletonCard";
import Pagina from "@/components/template/Pagina";

export default function Loading() {
  return (
    <Pagina>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-10 p-3">
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
    
      </div>


    </Pagina>
  )
}