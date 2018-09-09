HTML stands for hypertext markdown language
html syntax
opening tag - <tagname>
content - content goes here
closing tag - </tagname>
all equeals to be element

<!DOCTYPE>
<html> - root element
<head> - contains meta info
<title> - specifies title of webpage
<body> - visible page content


<div> takes up entire line
generic container use for "flow" of content
block-level element

<span> generic inline container

attributes are always defined in an opening tag
commonly use attributes
    id - specifies a unique id for an element
    class - specifies one or more classnames for an element
    src- specifies the URL for an image
    alt- specifies alternative text for image, when image can't be displayed
    href- specifies the URL for a link
    style- specifies an inline CSS style for an element


Tables
- A table is defined with a <table> tag
- Each table row is defined with the <tr> tag
- A table header is defined with the <th> tag
    - by default, table headings are bold and centered
- A table data/cell is defined with the <td> tag

Advanced Concepts
Forms are how we get input from user
Objectives
    use the <form> tag
    use the <input> tag
    use the <label> tag
    writing simple validations

The <form> tag
    a container for inputs
    "action" attribute - URL to send form data to
    "method" Attribute - type of HTTP request
        GET request
        POST request
    Block-level element
    <form action="" method=""> All imputs go here</form>

The <input> TAG
    content that goes inside the <form> tag
    <input> is a self-closing tag and an inline element
    commonly used input types
        text
        email
        password
        date
        color
        file
        checkbox
        radio

The <label> TAG
    allow us to add captions to individual elements in a form
    two ways of using labels
        <input> nested inside <label>
        using "for" and "id" attributes
            <lebel>
                username:
                <input type="text" placeholder="username>
            </label>
        <label for="username">username:</label>
        <input id="username type="text" placeholder="username">