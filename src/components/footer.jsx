const Footer = () => {
    const handleGitHubRedirect = () => {
        window.open('https://github.com/kesermustafa', '_blank');
    };

    return (
        <div className="flex items-center justify-center h-16 bg-amber-700 text-white mt-5 mb-1  ">
            <p className='italic'>
                &copy; <span onClick={handleGitHubRedirect} className='cursor-pointer text-amber-400 italic'>Mustafa Keser</span> All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
