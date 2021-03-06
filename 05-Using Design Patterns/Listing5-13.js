// Define a singleton containing methods to get references to page elements and to add
// attributes to those elements
var elements = {

    // Define a method to get DOM elements by tag name. If one element is found, it is
    // returned as an individual node, or multiple elements are found, an array of those
    // found elements are returned
    get: function(tag) {
        var elems = document.getElementsByTagName(tag),
            elemsIndex = 0,
            elemsLength = elems.length,
            output = [];

        // Convert the found elements structure into a standard array
        for (; elemsIndex < elemsLength; elemsIndex++) {
            output.push(elems[elemsIndex]);
        }

        // If one element is found, return that single element, otherwise return the array
        // of found elements
        return output.length === 1 ? output[0] : output;
    },

    // Define a composite method which adds an attribute to one or more elements, regardless
    // of how many are passed when it is executed
    addAttribute: function(elems, name, value) {
        var elemIndex = 0,
            elemLength = elems.length;

        // Determine if the elements passed in are an array or a single object
        if (Object.prototype.toString.call(elems) === "[object Array]") {

            // If they are an array, loop through each elements and apply the attribute to it
            for (; elemIndex < elemLength; elemIndex++) {
                elems[elemIndex].setAttribute(name, value);
            }
        } else {

            // If a single element was passed in, apply the attribute value to it
            elems.setAttribute(name, value);
        }
    }
};

// Use the elements.get() method to locate the single <body> element on the current page, and
// potentially numerous <a> elements
var body = elements.get("body"),
    links = elements.get("a");

// The composite elements.addAttribute() method gives the same interface to single elements
// as it does to multiple elements, simplifying its use considerably
elements.addAttribute(body, "lang", "en");
elements.addAttribute(links, "data-lang", "en");