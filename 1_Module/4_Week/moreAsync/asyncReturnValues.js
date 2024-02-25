// Asynchronous Return Values:

/*
  We've been playing with async functions that do things like reading input from
  standard input (stdin), or running code later with setTimout, but what about
  async functions that need to compute & return data?

  There are many example scenarious where this is needed. Here's a fictitious but
  realistic example:

    "Masozi, who works at a research firm is asked to use her coding chops and
    process some of the raw data collected by WOUDC to calculate the average
    annual change in Canada's ozone readings.

    While using Node, she will eventually have to write a function that returns an
    array of numbers, but that function will need to read files from disk
    asynchronously first."

  We have not yet tackled a situation like this, where our async function needs to
  compute and return data.

  Let's make one about cats. (see your git repo cats)
*/

