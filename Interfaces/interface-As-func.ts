//interface as function

interface Addfn {
  (a: number, b: number): number;
}
let ad: Addfn;

ad = (n1: number) => {
  return n1;
};


