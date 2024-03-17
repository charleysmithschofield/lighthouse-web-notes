# Character Encoding - Reading:

Character Encoding is a topic overlooked by many. A

lthough it is not necessary for you to achieve a mastery of this just yet, it is a topic that every experienced software developer should be familiar with.

## What is Character Encoding?

Words and sentences in text are created from characters.

Examples include:
  - Latin letter
  - Chinese ideograph
  - Devanagari character

Characters that are needed for a specific purpose are ground together in a character set (aka repertoire).

The characters are stored in the computer as one or more bytes.

So, when you input text using a keyboard, the character encoding maps characters you choose to specific bytes in the computer memory, and then to display the text it reads the bytes back into characters.

Unfortunately there are many different chracters sets and character encodings. Most of the time you will not need to know the details.

## How do Fonts Fit into this?
A font is a collection of 'glyph' definitions (aka shapes used to display the characters).

Once your browser or app has worked out what characters it is dealing with, it will then look in the font for glyphs it can use to display or print those characters. (Of course, if the encoding information was wrong, it will be looking up glyphs for the wrong characters.)

## How Does this Affect Me?
As a content author or developer, you should nowadays always choose the UTF-8 character encoding for your content or data. 

This Unicode encoding is a good choice because you can use a single character encoding to handle any character you are likely to need. This greatly simplifies things. 

Using Unicode throughout your system also removes the need to track and convert between various character encodings

## UTF-8:

UTF-8 is a variable-length character encoding standard using for electronic communication. Defines by the Unicode Standard.

UTF-8: Unicode Transformation Format 8-bit.

UTF-8 is capable of encoding all 1,112,064 valid Unicode code points using one to four one-byte (8-bit) code units.

Code points with lower numerical values, which tent to occur more frequenty, are encoded using fewer vytes.


## UTF-8 Video: Characters, Symbols and the Unicode Miracle:

  - video reference: https://www.youtube.com/watch?v=MijmeoH9LT4

