const loadData = async () => {
  try {
    console.time("Promise");
    const res = await Promise.all([
      fetch("http://localhost:3000/products"),
      fetch("http://localhost:3000/cart"),
    ]);
    const json = await Promise.all(res.map((x) => x.json()));
    console.log(json);
    console.timeEnd("Promise");
  } catch (error) {
    console.log("error", error);
  }
};

loadData();
