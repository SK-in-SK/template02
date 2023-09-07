import React from "react";

const Citation = ({ citation }) => {
  const targetAuthor = "Pur-oyd, S.";

  const { author, title, journal, volume, issue, year, doi, url, pages } =
    citation;

  // Remove periods, commas, and ampersands from author list to make it consistent
  // Names will be of format Surname, II, Surname2, II,
  //.replace("et al.", "%0000") // Replace et al. with a placeholder
  const strippedAuthorList = author
    .replaceAll("  ", " ")
    .replaceAll(". ", "")
    .replaceAll(".,", ",")
    .replaceAll(".", "")
    .replaceAll("& ", "")
    .replaceAll("&", "");

  // Remove the first comma in the list so the name is Surname IN,
  let commaCounter = 0;
  const commaStrippedAuthorList = strippedAuthorList.replace(/,/g, (match) => {
    commaCounter++;
    return commaCounter % 2 === 1 ? "" : match;
  });

  // Split the author list into an array of names
  const authorList = commaStrippedAuthorList.split(",").map((authorName) => {
    // Trim comma and space, split the names into first and last names
    const names = authorName.trim().split(" ");
    // If there is a space within surname, ex. Dutch surnames
    if (names.length > 2) {
      names[1] = names[0] + " " + names[1];
      names.shift(); // Remove last index
    }
    const surname = names.shift(); // Get surname

    // Add periods to initials
    const initials = names.map((initialString) => {
      //
      if (initialString.length <= 3) {
        return initialString.split("").join(".") + ".";
      } else {
        return initialString;
      }
    });

    const formattedName = `${surname}, ${initials}`;
    return formattedName;
  });

  const formattedAuthors = authorList;

  let citationString = (
    <React.Fragment>
      {year ? `(${year}). ` : ""}
      {title ? `${title}. ` : ""}
      {journal ? <em>{journal}</em> : ""}
      {journal ? ", " : null}
      {volume ? `${volume}` : null}
      {volume ? "\u00A0" : null}
      {issue ? `(${issue}) ` : ""}
      {pages ? `${pages}. ` : ""}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {doi ? `doi:\u00A0${doi}` : ""}
      </a>
    </React.Fragment>
  );

  return (
    <div className="citation">
      <p>
        {formattedAuthors.map((author, index) => {
          const isLastAuthor = index === authorList.length - 1;
          //console.log(author);
          if (author === targetAuthor) {
            return (
              <React.Fragment key={index}>
                <strong>{author}</strong>
                {", "} {/* Add a comma if it's not the last author */}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                {author}
                {!isLastAuthor && ", "}{" "}
                {/* Add a comma if it's not the last author */}
              </React.Fragment>
            );
          }
        })}
        {citationString}{" "}
      </p>
    </div>
  );
};

export default Citation;
