const loadData = async () => {
  let loading;
  try {
    loading = true;
    // 2 minutes
    const loginRes = await fetch("http://localhost:3000/login", {
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

    const loginJSON = await loginRes.json();
    if (!loginRes.ok) {
      throw new Error(loginJSON);
    }
    const todoRes = await fetch("http://localhost:3000/660/todoList", {
      headers: {
        Authorization: `Bearer ${loginJSON.accessToken}`,
      },
    });
    const todoJSON = await todoRes.json();
    if (!todoRes.ok) {
      throw new Error(todoJSON);
    }
    console.log(todoJSON);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally api complete");
    loading = false;
  }
};

loadData();
