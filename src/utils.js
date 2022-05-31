export function fetchImage(name) {
    const path = `./images/${name}.jpg`;
    const modules = import.meta.globEager("./images/*.jpg");
    return modules[path].default;
  }