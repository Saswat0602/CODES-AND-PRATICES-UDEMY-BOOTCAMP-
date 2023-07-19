const bcrypt = require("bcrypt");

//  const hashPassword = async(p)=>{
//     const salt = await bcrypt.genSalt(12)
//     const hash = await bcrypt.hash(p,salt)
//     console.log(salt);
//     console.log(hash);
//  }
 
const hashPassword = async (pw) => {
  //Pass in the plain text password and the number of rounds:
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("succesfully loged in");
  } else {
    console.log("try again");
  }
};

hashPassword("saswat");
login(
  "saswat",
  "$2b$12$mmipOxBdxp7.rJBSFOaNDeu9FHzAIT5EoNeY0LnowO.sfl6R7LaZ2"
);
