// Expressions JSX:

/*
  With an earlier project (TinyApp), we used EJS to create dynamic
  content out of HTML. JSX is going to feel very similar in its
  usage. It looks like a template language but it is purely JS.

  This means that we can include expressions within the JSX. In this
  example we pass an unformateed date to a component. It is the res-
  ponsibility of the component to format the date.

  The format function is called each time the component renders.
*/

import { format } from "date-fns";

function Footer(props) {
  return (
    <footer className="tweet__footer">
      {format(props.date, "MMMM Do, YYYY")}
    </footer>
  );
}

ReactDOM.render(
  <Footer
    date="2013-05-29"
  />,
  document.getElementById("root")
);

