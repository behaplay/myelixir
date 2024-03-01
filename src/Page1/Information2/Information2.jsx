import React from 'react'

const Information2 = () => {
    return (
        <section className="m-auto flex flex-row lg:justify-between md:justify-center gap-10 flex-wrap container px-5 lg:px-20 mt-10">
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                    <svg className="w-[27px] h-[18px] svg-inline--fa fa-users fa-w-20 text-primary me-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                    <h5 className="text-[21px] text-siniy font-bold">Awesome Team</h5>
                </div>
                <p className="text-[16px] text-gray-500 w-[80%] md:w-[280px]">Before talking destination, we shine a spotlight across your organization
                    to fully understand it.</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                    <svg className="w-[27px] h-[18px] svg-inline--fa fa-comments fa-w-18 text-primary me-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg>
                    <h5 className="text-[21px] text-siniy font-bold">Excellent Support</h5>
                </div>
                <p className="text-[16px] text-gray-500 w-[80%] md:w-[320px]">If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                    <svg className="w-[27px] h-[18px] svg-inline--fa fa-bolt fa-w-10 text-primary me-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path></svg>
                    <h5 className="text-[21px] text-siniy font-bold">Faster Performance</h5>
                </div>
                <p className="text-[16px] text-gray-500 w-[80%] md:w-[288px]">We develop a systematic well-ordered process of analysis, from concept through implementation.</p>
            </div>
        </section>
    )
}

export default Information2