function truncate(str, maxlength) {

  if (str.length <= maxlength) {

    return str;

  }

  else if (str.length > maxlength) {

    let truncateString;
    return truncateString = str.slice(0, maxlength-1)+'…';

  }
}
