# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing
Through the website audience classification tool I determined the visitors to Winter Wear Warehouse are most likely to be women, ages 18 to 65 with a college education or higher looking to buy scarfs for either fashion or practical purposes. This purchase is likely to be made on a cellphone or tablet during a lunch break or of an evening, however the older the customer there is still a good chance to be purchased on a laptop or desktop. Adults aged 18-29 94 percent own smartphones, while 73 percent of 50-64 year olds own smartphones. Of adults, 75 percent of women own a smartphone. Among all adults, at least 80 percent have some college, make at least $30,000 a year, and liven in urban areas while owning smartphones. So far in 2018 53 percent of adults own a tablet and 73 percent own either a laptop or desktop. In 2016 12 percent of adults do not use broadband at home but owned smartphones and considered smartphone dependent. Between the ages of 18-29 17 percent were smartphone dependent, for ages 30-49 it was 13 percent and 50-64 year olds it was 11 percent. By ethnicity 15 percent Black and 23 percent Hispanic are smartphone dependent. And both men and women sit at 12 percent for smartphone dependency. Adults with an annual income less than $30,000, 21 percent are smartphone dependent, and those with less than high school graduate are 27 percent dependent. Rural has more cellphone dependency at 14 percent, than urban and suburban areas.

Page speed testing on PageSpeed Insights showed optimization scoring a medium for both mobile and desktop, suggesting to optimize images, eliminate render-blocking JavaScript and CSS in above-the-fold content, and leverage browser caching. According to a WebPageTest using Chrome on Desktop, Android and iOS, this webpage scored an A grade for First Byte Time, Keep-alive Enabled, Compress Transfer, as well as a B grade for compressed images and scored an effective use of CDN. Lastly, this page scored and F in Cache static content. The same scores returned for Microsoft Edge. Page load time was fastest on Chrome at 1.597 seconds, on Edge it was 2.203 seconds and Firefox took the longest at 2.440 seconds. Overall most issues with the site appear to be http-caching and the responsive design on medium sized screen with widths between 1366 pixels and 451 pixels. 

Who
  Age and age groups: Adults, 18-65 (H)
  Personal life-style: Anyone who wants to dress trendy (L)
  Gender: Mostly female	(H)
  Language: Primarily English as first language (L)
  Education: some college or higher (M)
  Learning preferences:	Left-brained, practical demonstrations, free-thinker (L)
  Work attributes: Employee, professional, business owner, homemaker (L)
  Expectations: Varity, for the product to arrive exactly as described on the website (L)
  Existing: Fashion forward thinking, probably knowledgeable about some different kinds of fabrics, patterns and color combinations, different styles/ways of wearing scarfs (L)
  Web and computer experience: Medium to high (H)
How	
  On what device they will read it: Phone, tablet, PC (H)
  Internet connection speed: Fast broadband (M)
Where	
  User’s location	: national (L)
  Place where the page is read: home, at work, on the road, public places (M)
Why	
  Why users seek the content: To buy something (H)
  Importance of the content to them: Fashionable, useful in cold climate (L)
  How they found the page: Google (L)
When	
  When it is read	: Lunch-break, weekends , evening (M)

