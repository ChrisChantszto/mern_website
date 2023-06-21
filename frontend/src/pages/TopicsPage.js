import React from "react";

function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <article>
                <h3>Web Servers</h3>
                <p>The index, or /index.html is the resources of the request to the web server. Also, Index.html is the
                    default name
                    for a home page of a website hosted on an Apache web server. It is the designated homepage in many
                    websites in
                    the world.</p>
                <p>When the index.html is accessed through the web server, the request URL is HTTPS, and it contains
                    more
                    information on response headers that we have learned in the module 1. On the other hand, when the
                    index.html is
                    accessed locally, there are only last modified and content type on the response headers. Finally,
                    when
                    the file
                    is accessed through web server, there are other files to be connected other than the index page,
                    they
                    are
                    inpage.js, inpageSol.js and favicon.ico but only the index page when accessed locally.</p>
                <p>The favicon has a status of 200 because it is successfully accessed, but main.js and main.css are not
                    because
                    they are not being added to the a1-chantsz folder.</p>
                <p>My URL is https://web.engr.oregonstate.edu/~chantsz/a1-chantsz/. The scheme of URL is https. The host
                    domain is
                    oregonstate.edu. The subdomain is appended to the front of the domain name which is web.engr in this
                    case. The
                    path to resources is /~chantsz/a1-chantsz/.</p>
            </article>
            <article>
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> focuses on crafting the optimal user experience. This encompasses
                    the page's visual
                    design, graphical user interface (GUI), and interactivity. To achieve a cohesive visual design, it
                    is essential to have a consistent color palette, font and typography system, photography, icons,
                    illustrations, and logical navigation skeleton.</p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>helping users to meet their goals</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>users can perform tasks with minimum effort</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>easy for users to navigate different pages even they are the first time to use the website</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>error-free of accessibility and availability. The common errors could be found by observing
                        users'
                        behaviours actively</dd>
                    <dt>Enjoyable to use, or engaging</dt>
                    <dd>users should enjoy the entire process in terms of both contents and designs</dd>
                </dl>
                <p>The purpose of <strong>page layout tags</strong> is to distinguish the sections of website. Many
                    websites
                    often display
                    content in multiple columns. <strong>The content is broken into blocks and a line break comes before
                        and
                        after.</strong>
                    Moreover, CSS would be applied to the different layout tags. It is also a way to separate blocks
                    with
                    multiple CSS styles. There are some new names for the area of pages like <strong>header, nav, main,
                        section of
                        articles, asides, and a footer</strong></p>
                <p><strong>Text anchors</strong>, also known as <strong>anchor links or fragment identifiers</strong>,
                    are a
                    way to create a direct link to a
                    specific section or element within a document or webpage. They are <strong>often used to allow users
                        to
                        jump to
                        specific parts of the content without having to scroll through the entire document</strong>.
                    <strong>Anchors</strong> are
                    typically created by assigning an ID to a specific HTML element, and then linking to that ID using a
                    URL
                    fragment (e.g., #section1). When a user clicks on the anchor link, the browser will scroll to the
                    corresponding element with that ID. On the other hand, <strong>navigation</strong> refers to the
                    overall
                    structure and
                    organization of a website or document <strong>that enables users to move to other pages</strong>
                </p>
            </article>
            <article id="optimisingimages">
                <h3>Optimizing images</h3>
                <p>The six major specifications of images for the web are <strong>descriptive file name, small file
                    size, exact dimensions, correct file format, reduced resolution and color mode</strong>. The six
                    key specifications for web images include using descriptive file names for <strong>SEO</strong>
                    purposes, ensuring small file sizes for <strong>fast load times</strong>, setting exact dimensions
                    to fit the page layout, selecting the correct file format based on image type, providing reduced
                    resolutions for various devices, and utilizing the appropriate color mode. By implementing these
                    practices, you can optimize your website's images for enhanced user experience, performance, and
                    accessibility across various devices and platforms.</p>
                <p>for <strong>photos</strong>, <strong>.webp and .jpeg</strong> are the most appropriate formates.
                    .jpeg uses lossy compression. Although
                    some image data is lost during compressiong, the <strong>file sizes are smaller and beneficial for
                        faster
                        loading times.</strong> .webp provides <strong>both lossy and lossless compression</strong>,
                    which results in better image
                    quality.</p>
                <p>for <strong>line art</strong>, <strong>.png and .svg</strong> are the most appropriate formates. .png
                    is a lossless compression format,
                    so <strong>all image data are remained.</strong> Also, the <strong>image details are
                        preserved.</strong> Moreover, .svg uses
                    <strong>mathematical formulas to define shapes and lines instead of pixels.</strong> It then makes
                    .svg
                    resolution-independent without losing quality. Also, <strong>svg files can be easily manipulated
                        with CSS
                        and Javascript which are suitable for web graphics.</strong>
                </p>
            </article>
            <article id="cascadingstylesheets">
                <h3>Cascading stylesheets</h3>
                <p>Cascading Style Sheets (CSS) play a crucial role in enhancing the appearance and
                    behavior of webpages, complementing <strong>HTML's structural foundation</strong> and
                    <strong>JavaScript's dynamic components</strong>. By overriding default HTML styles with its unique
                    syntax, CSS ensures improved <strong>usability, readability, and legibility</strong> while adhering
                    to brand requirements.
                </p>
                <p>There are five methods for incorporating styles in a webpage: <strong>linking a stylesheet
                    globally</strong>, <strong>embedding styles within a style
                        tag</strong>, <strong>using inline styles with attributes and values</strong>,
                    <strong>employing JavaScript template literals within a function</strong>,
                    and <strong>manipulating the Document Object Model (DOM) with regular JavaScript</strong>. These
                    approaches offer various degrees of flexibility and maintainability for styling the website's
                    elements.
                </p>
            </article>
            <article id="javascriptIntro">
                <h3>JavaScript</h3>
                <p>
                    JavaScript has various main data types. <strong>For instance, number, string, boolean, object,
                        symbol and
                        array.</strong>
                </p>
                <p>In JavaScript, objects are like <strong>containers that hold data using key-value pairs</strong>,
                    while arrays are
                    <strong>ordered lists of values</strong>. JSON is a text format that makes it easy to read, write,
                    and transfer data
                    between different parts of a program or between a client and server. JavaScript <strong>provides
                        built-in
                        methods to convert JSON data to objects and arrays</strong>, making it simple to work with
                    structured data in
                    web applications.
                </p>
                <p>
                    In programming, <strong>conditionals</strong> and <strong>loops</strong> are essential for
                    controlling the flow of execution and repeating tasks. <strong>Conditionals</strong> allow you to
                    make decisions based on whether a certain condition is true or false. In JavaScript, the most common
                    conditional statements are if, else if, and else. They enable your code to perform different actions
                    depending on specific conditions. <strong>Loops</strong>, on the other hand, are used to repeatedly
                    execute a block of code as long as a certain condition is met. JavaScript provides several types of
                    loops, like for, while, and do-while. Loops help in automating repetitive tasks, such as iterating
                    over arrays or objects, and executing code until a desired outcome is achieved. Both
                    <strong>conditionals</strong> and <strong>loops</strong> are fundamental building blocks of
                    JavaScript programs, allowing developers to create more efficient and dynamic applications.
                </p>
                <p>
                    <strong>Object-oriented programming (OOP)</strong> in JavaScript is a way to write programs by
                    focusing on "<strong>objects</strong>" that represent real-world things or concepts. Think of an
                    object like a box that can hold both information and actions related to that information. In OOP,
                    these boxes interact with each other to perform tasks. JavaScript uses special templates called
                    "<strong>classes</strong>" to create these objects. This programming style helps make code more
                    organized, easy to understand, and reusable, allowing developers to build complex applications in a
                    more intuitive way.
                </p>
                <p>
                    <strong>Functional programming</strong> in JavaScript is a way to write programs by focusing on
                    simple, reusable functions that don't change data or cause unexpected effects. This approach makes
                    it easier to understand, test, and maintain code. In functional programming, you can use and combine
                    functions in flexible ways, like using them as input or output for other functions. This style helps
                    developers write clean and efficient code using techniques like <strong>map</strong>,
                    <strong>reduce</strong>, and <strong>filter</strong> to work with and transform data.
                </p>
            </article>
            <article id="randomdatatestingondom">
                <h3>JavaScript changes using random data</h3>
                <p>Testing DOM changes using random data is a valuable technique for developers to ensure the robustness
                    and reliability of their web applications. By generating random input data, developers can simulate
                    <strong>various scenarios and edge cases that may not be immediately apparent during regular testing
                    </strong>. This
                    approach helps to <strong>identify potential issues</strong> and <strong>bugs in the DOM
                        manipulation code</strong> , leading to more
                    stable and reliable web applications.
                </p>
                <p>Developers update the DOM of a page using <strong>JavaScript</strong> and <strong>Express</strong> to
                    create <strong>dynamic, responsive web applications</strong>. JavaScript is primarily used for
                    <strong>client-side interactivity</strong>, enabling developers to <strong>manipulate the
                        DOM</strong>, respond to user interactions, and <strong>update page content</strong> without
                    requiring a full page reload. This leads to an enhanced user experience and faster, more efficient
                    web applications.
                </p>
                <p><strong>Express</strong>, on the other hand, is a <strong>server-side JavaScript framework</strong>
                    that helps build web applications and APIs. It can <strong>generate and serve dynamic HTML
                        content</strong> that includes client-side JavaScript for <strong>DOM manipulation</strong>.
                    While Express itself does not update the DOM, it lays the groundwork for client-side JavaScript to
                    perform these tasks.</p>
            </article>
        </>
    )
}

export default TopicsPage;