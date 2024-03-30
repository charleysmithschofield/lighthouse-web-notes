# Disabling Viewport Zooming


We’ve got one final task for making a responsive web page. Before responsive design was a thing, mobile devices only had a desktop layout to work with. To cope with this, they zoomed out to fit the entire desktop layout into the width of the screen, letting the user interact with it by zooming in when necessary.

This default behavior will prevent mobile devices from using our mobile layout, which is obviously very terrible.

Instruction
Disable viewport zooming by adding the following element to the <head> your document

<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />

This is a critical element that should be on every single web page you create.
*/