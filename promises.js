// Promises

// Pending
// Full Filled(Resolved)
// not complete(Rejected)

// server call
// wait for some time for the data
// once the data is coming after that need to display the data

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 resolved data");
    }, 1000);
    // server call
    // get data
    // server failed
    // reject("p1 rejected")
    // resolve("p1 resolved data")
  });
};

p1()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally completed promise");
  });

console.log("s1");
console.log("s2");

// server call
// 5 minutes
// dispaly

// Old Javascript approch
fetch("http://localhost:3000/login", {
  method: "POST",
  body: JSON.stringify({
    email: "yagnesh.modh@gmail.com",
    password: "abcd",
  }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json", // validation
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    return res.json();
  })
  .then((json) => {
    console.log(json);
    fetch("http://localhost:3000/660/todoList", {
      headers: {
        Authorization: `Bearer ${json.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

const loadData = () => {
  try {
    const res = fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: "yagnesh.modh@gmail.com",
        password: "abcd",
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", // validation
      },
    });
    console.log(res);
  } catch (error) {
  } finally {
  }
};

loadData();
