const SlideOver = () => {
    const toggleSlideOver = () => {
        document.getElementById('slideover-container').classList.toggle('invisible');
        document.getElementById('slideover-bg').classList.toggle('opacity-0');
        document.getElementById('slideover-bg').classList.toggle('opacity-50');
        document.getElementById('slideover').classList.toggle('translate-x-full');
    }


    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div onClick={toggleSlideOver} className="px-5 py-3 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded text-gray-600">Toggle</div>
            <div id="slideover-container" className="fixed inset-0 w-full h-full invisible">
                <div onClick={toggleSlideOver} id="slideover-bg" className="absolute duration-500 ease-out transition-all inset-0 w-full h-full bg-gray-900 opacity-0"></div>
                <div id="slideover" className="absolute duration-500 ease-out transition-all w-64 h-full bg-white right-0 top-0 translate-x-full">
                    <div onClick={toggleSlideOver} className="w-10 h-10 text-black cursor-pointer flex items-center justify-center top-0 mt-5 mr-5">
                        <i class="ri-close-line"></i>
                    </div>
                </div>
            </div>
        </div>
)
}

export default SlideOver;