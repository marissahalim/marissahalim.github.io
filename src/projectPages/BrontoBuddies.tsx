import { BlogLayout } from '../components/BlogLayout';

export default function BrontoBuddies() {
    return <BlogLayout>
        <div className="flex flex-col" id="WA">
            <div>
                <p className="text-3xl text-center p-4"> BrontoBuddies: A Dinosaur Safari VR experience </p>
                <p className="text-l text-left">
                    <strong>Role</strong>: VR Developer, Environment designer, Animator
                    <br />
                    <strong>Tools</strong>: Unity, Blender, VS Code
                    <br />
                    <br />
                    In my last year of grad school, I took a VR course and ended up developing this VR experience called BrontoBuddies with two other graduate students:
                    <a className="text-blue-500" href="https://github.com/carolwong492"> Carol</a> and <a className="text-blue-500" href="https://www.linkedin.com/in/loellelam/">Loelle</a>.
                    We wanted to create an educational on-rails VR experience that allowed users to feel like they were teleported into the Jurassic era and were able to observe the Brontosaurus in its natural habitat.
                    To do this, we first researched the environment and behaviors of the Brontosaurus. Once we got all our information, we narrowed down three behaviors that we wanted to showcase in our experience: eating, nesting, and migrating.
                    We used a kanban board to organize our workflow and divided up the work based on our strengths and interests.
                </p>
                <br />
                <p>
                    I was responsible for designing the environment, animating the Brontosaurus' eating and migrating behavior, developing the flow of the experience, and implementing the camera system in Unity.
                </p>
                <br />
                <p className="text-l text-left">
                    Below is a video of the entire VR exprience. Users explore the different areas of the environment, take pictures to document the different behaviors of the Brontosaurus, and take a quiz to see what information they retained at the end of the experience.
                </p>
                <iframe
                    src="https://player.vimeo.com/video/1197330691?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    className="w-full aspect-video rounded-lg shadow-md"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />
                {/* <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1197330691?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="BrontoBuddiesVR"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
                {/* <video className="w-full py-4" controls>
                    <source src="/BrontoBuddiesVR.MP4" type="video/mp4" />
                    Your browser does not support HTML video.
                </video> */}
            </div>
        </div>
    </BlogLayout>;
}