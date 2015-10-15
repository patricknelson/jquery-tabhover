# jquery-tabhover
Provide keyboard accessible hover emulation when tabbing through HTML elements.

**Example usage (with all options):**

```js

// Emulate hover actions on "li" elements when pressing
// the tab key underneath ".container" elements.
$(".container").tabhover({
	// Selector (required). The hover class will be applied mutually exlusively to these 
	// child elements whenever tab is pressed to enter elements *underneath* these children.
	children: "li",
	
	// Optional class to apply to child elements which have received focus.
	hoverClass: "hover"
});

```
