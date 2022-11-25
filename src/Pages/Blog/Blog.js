import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section>
            <section className="text-black bg-primary">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">


                    <p className="p-4 text-sm font-medium tracking-wider text-center uppercase">Blog</p>
                    <hr />
                    <hr />
                    <hr />
                    <h2 className="my-7 text-4xl font-bold leading-none text-center sm:text-5xl">Some 'MERN-STACK' Questions</h2>

                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />


                    <div className="divide-y divide-black text-justify">

                        {/* Q-1 */}
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 text-4xl">
                                What are the different ways to manage a state in a React application?
                            </h3>

                            <p className="md:pl-0 md:col-span-7">
                                When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                                <br /><br />
                                There are <b>four main types of state</b> you need to properly manage in your React apps:
                                <br /><br />
                                <b>1. Local state</b>
                                <br />
                                <b>2. Global state</b>
                                <br />
                                <b>3. Server state</b>
                                <br />
                                <b>4. URL state</b>
                                <br /><br />
                                Let's cover each of these in detail:
                                <br /><br />
                                <b> Local (UI) state – </b> Local state is data we manage in one or another component.

                                Local state is most often managed in React using the useState hook.

                                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                                <br /><br />
                                <b>Global (UI) state – </b> Global state is data we manage across multiple components.

                                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                                Sometimes state we think should be local might become global.
                                <br /><br />
                                <b>Server state – </b> Data that comes from an external server that must be integrated with our UI state.

                                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                                Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                                <br /><br />
                                <b>URL state – </b> Data that exists on our URLs, including the pathname and query parameters.

                                URL state is often missing as a category of state, but it is an important one.
                                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                            </p>
                        </div>

                        {/* Q-2 */}
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 text-4xl">
                                How does prototypical inheritance work?
                            </h3>

                            <p className="md:pl-0 md:col-span-7">
                                <b>Prototypal inheritance</b> is one of the things that people are most confused about when they start to learn JavaScript. In this article, I am going to give you an insight into what prototypal inheritance is, how it works and how it is different from classical inheritance. I shall try to explain in a less technical way for all of you to understand the topic.
                                <br /><br />
                                We first have to understand the concept of abstraction. Abstraction is to encapsulate the data that you do not want to expose from the external world. Classical inheritance, which can be commonly seen in object-oriented programming languages like Java, has mainly two abstractions: Objects and Classes. An Object is an abstraction of real-world entity representation (which has the lowest level of abstraction), whereby a Class is an abstraction of either an object or another class. Still, confusing? Let’s look at a diagram:
                                <br /><br />
                                <img src="https://miro.medium.com/max/1400/1*WY3ufd-UbWAGjcT3wWAeJg.png" alt="" className='rounded-3xl mx-auto w-full' />
                                <br /><br />
                                Let’s imagine that Dog, Horse and Cat are objects, which are the representation of real entities in the world, thus they are less abstract. Animal. is the class that these objects are inherited from, and is more generalized. Animal class, in this case, has a higher level of abstraction than animal objects.
                                <br /><br />
                                Not going into detail about Object-oriented programming here as this is not for today, I shall write about it if you guys are interested in future articles.
                                <br /><br />
                                How about Prototypal Inheritance? It only has one level of abstraction: Objects. You always hear people saying: “Almost everything is an object in JavaScript.” Well, that is technically true. You might say, I think Function is not an object right? Function is a callable object in JavaScript. Let me show you an example:
                                <br /><br />
                                <img src="https://miro.medium.com/max/566/1*2g2m7WEO_iUhyTY7MJ56fA.png" alt="" className='rounded-xl mx-auto w-full' />
                                <br /><br />
                                A function that adds up two numbers, looks valid. Time to expose the true color of this function by typing a dot:
                                <br /><br />
                                <img src="https://miro.medium.com/max/524/1*QAHsCC5I2pM-Qi-QHcGB8g.png" alt="" className='rounded-xl mx-auto w-full' />
                                <br /><br />
                                There are properties and methods associated with this “function”. You can also assign new property to it:
                                <br /><br />
                                <img src="https://miro.medium.com/max/360/1*8qwpnc4hLZYDPQjmZ2BCvA.png" alt="" className='rounded-xl mx-auto w-full' />
                                <br /><br />
                                Objects in JavaScript are not created from classes (we are not talking about ES6 classes here), only either to create a new object (somehow) or from another object. Here is a full fledge of syntaxes that you can use to create a JavaScript object:
                                <br /><br />

                                <a className='underline  flex justify-center items-center text-xl text-blue-900'
                                    target="_blank" rel="noopener noreferrer"

                                    href="https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/">How to create objects in JavaScript.</a>

                                <br /><br />
                                Did I just say I can create a new object from scratch in JavaScript? Let’s find out:
                                <br /><br />
                                <img src="https://miro.medium.com/max/338/1*9mfkO-rP7vUfj9zhpR-OpQ.png" alt="" className='rounded-xl mx-auto w-full' />
                                <br /><br />
                                You created an object and gave it a property called “name”. However, you might also realize that you are able to access some properties and methods that you did not give when you created the object.
                                <br /><br />
                                <img src="https://miro.medium.com/max/442/1*t4_VvIW7w5O-Q-yxnnF0IA.png" alt="" className='rounded-xl mx-auto w-full' />
                                <br /><br />
                                All these are accessed by an accessor property called __proto__, which gives you access to all the properties and methods of the object that you are created from. Let’s create a new object from objA object:
                                <br /><br />
                                <img src="https://miro.medium.com/max/486/1*XIaUpEKM7j59vHkX6H_hog.png" alt="" className='rounded-xl mx-auto w-full' />
                                <br /><br />
                                Hey, I actually got the name property from objA! This is how it works in plain text: When you try to access a property of an object, it will first look at itself, whether or not it does have this property. If not found, it will go one level up to your prototype through the accessor __proto__, which is the object that you created from (objA in this case). What if this property still could not be found in objA? It will go one level up again to find that property. The prototype that objA is created from is the JavaScript base object, Object.prototype. This is called the prototype chain and Object.prototype is the end of the chain. If you try to access the prototype of Object.prototype, you will get a null.
                            </p>
                        </div>

                        {/* Q-3 */}
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 text-4xl">
                                What is a unit test? Why should we write unit tests?
                            </h3>

                            <div className="md:pl-0 md:col-span-7">
                                <b className='text-2xl'>What is Unit Testing?</b>
                                <br /><br />
                                Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected.
                                <b> A unit can be anything you want it to be — a line of code, a method, or a class. </b>
                                <br /><br />
                                Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.
                                <br /><br />
                                <img src="https://themoduscreate.wpenginepowered.com/wp-content/uploads/2021/08/Levels-of-Software-Testing-768x1048.png" alt="" className='rounded-2xl mx-auto w-full' />
                                <br /><br />
                                <span className='text-center block p-1 text-lg font-semibold italic text-white'>Different levels of software testing</span>
                                <br /><br />
                                There are two types of unit testing:
                                <br /><br />
                                <b>1. Manual:</b> As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.
                                <br /><br />
                                <b>2. Automated:</b> This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.
                                <br /><br />
                                <b className='text-2xl'>Why Do We Need Unit Testing?</b>
                                <br /><br />
                                To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:
                                <br /><br />

                                <ul className='list-disc'>

                                    <li>
                                        Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                                    </li>

                                    <li>
                                        Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                                    </li>

                                    <li>
                                        It simplifies the debugging process.
                                    </li>

                                    <li>
                                        Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                                    </li>

                                    <li>
                                        Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                                    </li>

                                    <li>
                                        Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                                    </li>

                                    <li>
                                        In the <a className='underline text-xl text-blue-900'
                                            target="_blank" rel="noopener noreferrer"
                                            href="https://moduscreate.com/blog/test-automation-strategy-test-pyramid/">testing pyramid</a> ,

                                        unit tests are faster than integration and end-to-end.They are more assertive and return quick feedback.
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Q-4 */}
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 text-4xl">
                                React vs. Angular vs. Vue?
                            </h3>

                            <p className="md:pl-0 md:col-span-7">
                                <img src="https://cdn-images-1.medium.com/max/2000/1*nEc3zJgx4QKPDinTPyi8XQ.png" alt="" className='w-full rounded-2xl mx-auto' />

                                <br /><br />

                                <img src="https://cdn-images-1.medium.com/max/2000/1*bfOcT-_JN0-kYPU68QrLlQ.jpeg" alt="" className='w-full rounded-lg mx-auto' />
                                <br /><br />

                            </p>
                        </div>

                    </div>




                </div>
            </section>
        </section>
    );
};

export default Blog;


