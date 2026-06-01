export function About() {
    return <div className="grid grid-cols-2 gap-6 pb-16 px-24 items-center" id="About">
        <div className="flex justify-center">
            {/* <p className="text-3xl text-center py-6">Hello, my name is Marissa!</p> */}
            <p className="text-xl text-justify p-6">
                I am a recent graduate student from the University of Hawaii at Manoa with a degree in Computer Science. 
                For my undergraduate degree, I double majored in Computer Science and Creative Media: Animation so I've developed skills in both technical and creative areas. 
                I enjoy working on projects where I can interact with a range of people and contribute to building meaningful experiences.
                <br />
                <br />
                Outside of work, I enjoy hanging out with my family and friends, starting new fiber arts projects, and experimenting with different drink recipes. 
            </p>
        </div>
        <div className="flex justify-center items-center">
            <img src="/images/AboutMe.jpg" alt="About Me" className="w-full h-full object-cover rounded-lg shadow-md mx-auto max-h-144" />
        </div>
    </div>
}