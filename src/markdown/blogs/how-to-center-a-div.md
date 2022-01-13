# How to center a Div

The age old question.  
I'll show you two modern ways to center content within a block.  

To start with, set up some HTML boiler plate.  

A ``<section>`` wrapper which is the container.  
An ``<article>`` tag to act as the content being centered

![HTML code.](/images/center-div-html.png "This is a sample image.")

### Flexbox
The first method uses Flexbox.  
The container is set to a ``display: flex;``  
``align-items`` then centers the content along the y-axis.  
``justify-content`` centers the content along the x-axis.  
``flex`` will set the width of the container to 100%, but we need to set the height, otherwise the content will just sit at the top of the page.
![CSS code.](/images/center-div-css-1.png "This is a sample image.")

### Grid
The second method is with grid, I use this method alot - particulary, for example, if the content inside a button is not aligning properly.  

We just need to set the container to ``display: grid;`` with a propery of ``place-items: center;``.  

That's it! (Just remember to also set the height).

![CSS code.](/images/center-div-css-2.png "This is a sample image.")
