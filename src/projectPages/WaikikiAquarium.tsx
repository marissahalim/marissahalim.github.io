import { BlogLayout } from '../components/BlogLayout';

export default function WaikikiAquarium() {
    return <BlogLayout>
        <div className="flex flex-col" id="WA">
            <div>
                <p className="text-3xl text-center p-6"> Waikiki Aquarium Papahānaumokuākea Immersive Exhibit </p>
                <p className="text-l text-left">
                    <strong>Role</strong>: Exhibit designer, 3D artist (rigging, animation, texturing)
                    <br />
                    <strong>Tools</strong>: Autodesk Maya, Blender, Adobe Substance 3D Painter, Adobe Premiere Pro, Unity
                    <br />
                    <br />
                    When I joined the LAVA lab as an undergratuate research assistant, I had the opportunity to work on a spatial-augmented reality exhibit for the Waikiki Aquarium.
                    I worked with one other research assistant, <a className="text-blue-500" href="https://cjsiador.com/"> CJ </a>,  to create a Unity app that transported users to the coral reefs of the Papahānaumokuākea Marine National Monument.
                    The exhibit was intended to showcase the beauty and diversity of the marine life in the monument.
                </p>
                <br />
                <p className="text-l text-left">
                    My first task for this project was to design the exhibit space which included the process of
                    visiting the aquarium and measuring the space, developing a digital twin in Maya for stakeholders to visualize, develop the budget for all the equipment needed, and lastly
                    submit the final measurements for construction. Below are some of the measurements that I submitted.
                </p>
                <div className="grid grid-cols-2 gap-10 max-w-4xl w-full py-6">
                    <img src="/images/FrontView.png" alt="Waikiki Aquarium Exhibit" className="w-full h-auto object-cover" />
                    <img src="/images/SideView.png" alt="Waikiki Aquarium Exhibit" className="w-full h-auto object-cover" />
                </div>
                <br />
                <p className="text-l text-left">
                    This is one of the renders of the exhibit we used to help stakeholders visualize the final space.
                </p>
                <div className="flex justify-center pt-4">
                    <video className="w-full rounded-lg shadow-md" controls>
                        <source src="/OptomaRender.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
                <br />
                <p className="text-l text-left">
                    Once the exhibit's final measurements were submitted, I was responsible for creating 3D assets for the app, specifically large fish and mammals that are protected species in the NWHI area.
                    This included texturing, rigging, and animating a Hawaiian monk seal, a scalloped hammerhead shark, a tiger shark, and a whale shark. Below are some snippets of what the hammerhead shark and whale shark looked like in the early stages of development.
                </p>
                <div className="grid grid-cols-2 gap-10 max-w-4xl w-full py-6">
                    <video className="w-full rounded-lg shadow-md" controls>
                        <source src="/Hammerhead.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                    <video className="w-full rounded-lg shadow-md" controls>
                        <source src="/WhaleShark.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
                <br />
                <p className="text-l text-left">
                    Below is a video of what the exhibit looked like right before I left the project due to graduation. The content for the exhibit was still in development at this point, but it was really exciting to see how much progress we had made and how the assets I created were being used in a real world setting.
                </p>
                <video className="w-full py-4" controls>
                    <source src="/AquaIRL.mp4" type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
    </BlogLayout>;
}