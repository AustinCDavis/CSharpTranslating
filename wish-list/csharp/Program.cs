using System;
using System.Linq;
using System.Collections.Generic;

// We must specify the Type of the "wishes" variable.
//  It is a "List" that can only contain "strings".
List<string>wishes = new List<string> {
    "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'",
    "The ability to think of interesting wishes on short notice",
    "A washtub of Skittles",
    "World peace, but not the kind of world peace where all the humans are removed from existence",
    "A TV that is NOT internet-capable",
    "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"
};

// Print some output to the terminal (aka. "Console");
Console.WriteLine("My wishes...");

// Iterate over each "wish" in the "names" list
foreach (string wish in wishes)
{
    Console.WriteLine(wish);
}

// When you don't pass an argument to WriteLine, it simply outputs a blank line.
//  Here we use that to add a little space around the output.
Console.WriteLine();
