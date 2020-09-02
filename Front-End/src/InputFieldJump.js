const jump = (keep) => {
  keep.persist();
  keep.target.className +=
    " animate__animated animate__bounce animate__repeat-1";
  setTimeout(() => {
    let find = keep.target.className.indexOf(
      "animate__animated animate__bounce animate__repeat-1"
    );
    let newClass = keep.target.className.substr(0, find);
    keep.target.className = newClass;
  }, 1000);
};

export default jump;
