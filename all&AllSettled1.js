const loadData = async () => {
  try {
    console.time("Promise");
    const res = await Promise.all([
      fetch("http://localhost:3000/products"),
      fetch("http://localhost:3000/cart"),
    ]);
    const json = await Promise.all([res[0].json(), res[1].json()]);
    console.log(json);

    // const productsRes = await fetch("http://localhost:3000/products");
    // const productsJson = await productsRes.json();
    // console.log(productsJson);

    // const cartRes = await fetch("http://localhost:3000/cart");
    // const cartJson = await cartRes.json();
    // console.log(cartJson);
    console.timeEnd("Promise");
  } catch (error) {
    console.log("error", error);
  }
};

loadData();
