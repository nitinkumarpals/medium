
const SkeletonLoader = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
                    <div className="col-span-8">
                        
                        <div className=" bg-gray-200 rounded-full w-3/4 h-10  mb-2.5 animate-pulse"></div> 
                        <div className=" bg-gray-200 rounded-full w-3/4 h-10  mb-2.5 animate-pulse"></div>
                        <div className=" bg-gray-200 rounded-full w-3/4 h-10  mb-2.5 animate-pulse"></div>

                        <div className=" bg-gray-200 rounded-full w-1/4 h-5  mb-2.5 animate-pulse"></div> 
                        <div className="h-4 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>

                    </div>
                    <div className="col-span-4">
                        <div className="bg-gray-200 h-6 w-20 mb-4 animate-pulse rounded-full"></div> 
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <div className="bg-gray-200 h-16 w-16 rounded-full animate-pulse"></div> 
                            </div>
                            <div className="w-full">
                                <div className="bg-gray-200 h-6 w-1/3 mb-2 animate-pulse rounded-full"></div> 
                                
                                <div className="h-4 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded-full  mb-2.5 animate-pulse"></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
