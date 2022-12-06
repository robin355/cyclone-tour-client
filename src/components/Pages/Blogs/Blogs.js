import React from 'react';
import useTitle from '../../../Hook/UseSetTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h3 className='text-2xl text-yellow-600'>1.Difference between SQL and NoSQL?</h3>
            <p><span>Answer:</span>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h3 className='text-2xl text-yellow-600'>2.What is JWT, and how does it work?</h3>
            <p><span>Answer:</span>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            <h3 className='text-2xl text-yellow-600'>3.What is the difference between javascript and NodeJS?</h3>
            <p><span>Answer:</span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            <h3 className='text-2xl text-yellow-600'>4.How does NodeJS handle multiple requests at the same time?</h3>
            <p><span>Answer:</span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blogs;