import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div style={{ margin: '10px 50px' }} className=' mx-auto container'>
                <h1>Question 1: Difference between javascript and nodejs ??</h1>
                <h4>Answer : </h4>
                <table>
                    <thead>
                        <th>JavaScript</th>
                        <th>Node Js</th>
                    </thead>
                    <tbody>
                        <td><h6>is a Scripting language. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script.</h6></td>
                        <td><h5>NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</h5></td>
                    </tbody>

                </table>
            </div>
            <div className='container my-5'>

                <h1>Question 2: When should you use nodejs and when should you use mongodb??</h1>
                <h4>Answer :</h4>
                <h6><span className='fw-bold fs-5'>Node Js : </span> Node.js has many valuable virtues and works well for these clients. It might not be the best choice for every project. Node.js should be considered for any real-time applications intended to run on various devices. If the product requires fast prototyping or performs CPU-intensive tasks there are other technologies, including Rails, that will do a better job.</h6>
                <h6><span className='fw-bold fs-5'>MongoDB : </span> MongoDB is a great database for web applications, especially if the application services many users who do not interact with each other. Think financial services applications, where users only need access to their own data. Or a blogging application, where users want to log in and create/edit their own blogs. Users not interacting with each other is the key takeaway.</h6>
            </div>
            <div className='container my-5'>

                <h1>Question 4: What is the purpose of jwt and how does it work ??</h1>
                <h4>Answer :</h4>
                <h6><span className='fw-bold fs-5'>JWT (JSON Web Token) : </span> JWT is a standard used to share information in a secure way.Though it’s a very popular technology, JWT authentication comes with its share of controversy. Some say one should never use it. Others say JWT authentication is amazing. The truth lies somewhere in between the value of using JWT depends on your use case and project requirements.
                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User’s Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key. </h6>
            </div>

        </div>
    );
};

export default Blogs;