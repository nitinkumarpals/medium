
export const SkeletonBlog = () => {
    return <div>
        <div className="flex justify-center">
            <div className="max-w-xl w-full pt-10">
                <div className="mb-2">

                    <div className="flex items-center mb-4">
                        <div className='flex items-center'>
                            <div className="bg-gray-300 h-10 w-6 h-6 rounded-full mr-4 animate-pulse"></div>
                            <div className="h-2 bg-gray-200 rounded-full  w-14 h-4 "></div>
                            <div className="ml-4 h-2 bg-gray-200 rounded-full  w-14 h-4 "></div>
                        </div>

                        <div className="flex flex-col">
                            <div className="bg-gray-300 h-4 w-1/4 animate-pulse"></div> {/* Published At Skeleton */}
                        </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>

            </div>
        </div>
    </div>
}

